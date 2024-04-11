<?php

/**
 * @author TechVillage <support@techvill.org>
 *
 * @contributor Md. Mostafijur Rahman <[mostafijur.techvill@gmail.com]>
 *
 * @created 01-03-2023
 */

namespace Modules\Upgrader\Http\Controllers;

use Modules\Upgrader\Entities\UpgradeManager;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\File;
use App\Http\Controllers\Controller;
use App\Lib\PhpInfo;
use GuzzleHttp\Client;
use Modules\Addons\Entities\Envato;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use ZipArchive;

class SystemUpdateController extends Controller
{
    /**
     * Display the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function upgrade(Request $request)
    {
        if ($request->isMethod('get')) {

            // Waiting for upgrade
            if ($request->has('waiting')) {
                $this->waiting();

                return;
            }

            // Process the upgrade
            if ($request->has('process')) {
                $this->process();

                return;
            }

            // Check if the upgrade is eligible
            $data['applicationVersion']  = config('martvill.file_version', env('MARTVILL_VERSION', '1.0.0'));

            return view('upgrader::update', $data);
        }

        // Store the upgrade zip file
        if ($request->isMethod('post')) {
            $validator = Validator::make($request->all(), [
                'attachment' => 'required|mimes:zip,rar,7zip',
                'purchaseCode' => 'required',
            ]);

            if ($validator->fails()) {
                $message = $this->configuration();

                return back()->withErrors(['Message' => $message]);
            }

            if (! Envato::isValidPurchaseCode($request->purchaseCode)) {
                return back()->withErrors(['Message' => __('Please provide valid purchase code.')]);
            }

            if (! class_exists('ZipArchive')) {
                return back()->withErrors(['Message' => __('Something went wrong please try again.')]);
            }

            $zip = new ZipArchive();
            $res = $zip->open($request->attachment);

            $upgraderDirecotory = storage_path('updates');

            if (is_dir($upgraderDirecotory)) {
                File::deleteDirectory($upgraderDirecotory);
            }

            if ($res === true) {
                $res = $zip->extractTo($upgraderDirecotory);
                $zip->close();
            }

            $upgrader = (new UpgradeManager())->isValid();

            return view('upgrader::eligible', compact('upgrader'));
        }

        return back();
    }

    /**
     * Redirect to waiting page
     */
    private function waiting()
    {
        echo (new UpgradeManager())->view(route('systemUpdate.upgrade', ['process' => true]));
    }

    /**
     * Process the upgrade
     */
    private function process()
    {
        (new UpgradeManager())->run();

        if (\Illuminate\Support\Facades\File::exists(storage_path('updates'))) {
            echo '<p>' . __('You will be redirect to the system. If not, click :x', ['x' => "<a href='" . url('upgrade-retry') . "'>" . __('here') . '</a>']) . "</p><meta http-equiv=\"refresh\" content=\"5;URL='" . url('upgrade-retry') . "'\" />";
        } else {
            echo '<p>' . __('You will be redirect to the system. If not, click :x', ['x' => "<a href='" . url('/') . "'>" . __('here') . '</a>']) . "</p><meta http-equiv=\"refresh\" content=\"5;URL='" . url('/') . "'\" />";
        }

    }

    /**
     * Check php configuration
     *
     * @return string
     */
    private function configuration()
    {
        $message = __('Validation failed.');

        $systemError = __('Please check system configuration, go to :x', ['x' => route('systemInfo.index')]);

        $configurations = PhpInfo::phpinfo_configuration();
        if (empty($configurations)) {
            return __('phpinfo() is disabled. Please contact with your hosting provider.');
        }

        $config = [
            (int) str_replace('M', '', $configurations['upload_max_filesize']) < 128,
            (int) $configurations['max_file_uploads'] < 20,
            (int) str_replace('M', '', $configurations['post_max_size']) < 128,
            (int) $configurations['max_execution_time'] < 600,
            (int) $configurations['max_input_time'] < 120,
            (int) $configurations['max_input_vars'] < 1000,
            (int) str_replace('M', '', $configurations['memory_limit']) < 256,
        ];

        if (in_array(true, $config)) {
            return $systemError;
        }

        return $message;
    }

    /**
     * Check latest version
     */
    public function checkVersion()
    {
        $itemCode = config('martvill.item_code', '43288879');
        $version = config('martvill.file_version', env('MARTVILL_VERSION', '1.0.0'));
        $apiEndpoint = config('martvill.server_url', 'https://support.techvill.org') . "/api/v1/version/check/{$itemCode}/{$version}"; // Replace with the API endpoint
        $newVersion = $version;

        try {
            $response = Http::get($apiEndpoint);

            if (! $response->successful() || ! isset($response->json()['response']['records']['version'])) {
                return view('upgrader::version', ['currentVersion' => $version, 'latestVersion' => $newVersion, 'status' => 'fail', 'message' => $response->json()['response']['status']['message']]);
            }

            $newVersion = $response->json()['response']['records']['version'];

            return view('upgrader::version', ['currentVersion' => $version, 'latestVersion' => $newVersion, 'status' => 'success', 'message' => $response->json()['response']['records']['message']]);
        } catch (\Exception $e) {
            return view('upgrader::version', ['currentVersion' => $version, 'latestVersion' => $newVersion, 'status' => 'fail', 'message' => $e->getMessage()]);
        }
    }

    /**
     * Download latest version
     */
    public function downloadVersion(Request $request)
    {
        $itemCode =  config('martvill.item_code', '43288879');
        $apiEndpoint = config('martvill.server_url', 'https://support.techvill.org') . '/api/v1/version/download'; // Replace with the API endpoint
        $storagePath = storage_path('app/downloaded-files'); // Define the storage directory

        // Create a Guzzle HTTP client
        $client = new Client();

        try {
            $response = $client->post($apiEndpoint, [
                'form_params' => [
                    'item_code' => $itemCode,
                    'version' => $request->version,
                    'domain' => request()->getSchemeAndHttpHost(),
                    'purchase_code' => $request->purchase_code,
                ],
            ]);

            // Extract the file name from the Content-Disposition header
            $header = $response->getHeader('Content-Disposition');
            $fileExplode = explode('filename=', $header[0]);
            $fileName = end($fileExplode);

            // Save the file with the original name and extension
            $response->getBody()->rewind();

            if (! is_dir($storagePath)) {
                mkdir($storagePath, config('app.filePermission'), true);
            }

            file_put_contents($storagePath . '/' . $fileName, $response->getBody());

            $zip = new ZipArchive();
            $res = $zip->open($storagePath . '/' . $fileName);

            $upgraderDirecotory = storage_path('updates');

            if (is_dir($upgraderDirecotory)) {
                File::deleteDirectory($upgraderDirecotory);
            }

            if ($res === true) {
                $res = $zip->extractTo($upgraderDirecotory);
                $zip->close();
            }

            $upgrader = (new UpgradeManager())->isValid();

            return view('upgrader::eligible', compact('upgrader'));
        } catch (\GuzzleHttp\Exception\RequestException $e) {
            $downloadDirectory = storage_path('app' . DIRECTORY_SEPARATOR . 'downloaded-files');

            if (File::isDirectory($downloadDirectory)) {
                File::deleteDirectory($downloadDirectory);
            }

            return redirect()->back()->with(['status' => 'fail', 'message' => json_decode($e->getResponse()->getBody()->getContents(), true)['response']['status']['message']]);
        }
    }
}
