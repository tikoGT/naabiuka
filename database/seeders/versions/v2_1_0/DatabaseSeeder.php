<?php

namespace Database\Seeders\versions\v2_1_0;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            PermissionsTableSeeder::class,
            EmailTemplateTableSeeder::class,
            NotificationSettingsTableSeeder::class,
            PreferencesTableSeeder::class,
        ]);
    }
}
