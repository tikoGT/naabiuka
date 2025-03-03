<?php

namespace App\Services\Mail;

use App\Models\User;
use Auth;

class AssigneeMailService extends TechVillageMail
{
    /**
     * Send mail to Asignee
     *
     * @param  object  $request
     * @return array $response
     */
    public function send($request)
    {
        $email = $this->getTemplate(preference('dflt_lang'), 'ticket-assignee');

        if (! $email['status']) {
            return $email;
        }

        $assignData = User::where('id', $request['assignId'])->first();
        $ticket_reply = url('admin/ticket/reply/' . base64_encode($request['emailInfo']->id));
        $subject      = str_replace(['{ticket_subject}', '{ticket_no}'], [$request['emailInfo']->subject, $request['emailInfo']->id], $email->subject);
        $message = str_replace(
            ['{assignee_name}', '{ticket_message}', '{ticket_no}', '{customer_id}', '{ticket_subject}', '{ticket_status}',
                '{details}', '{assigned_by_whom}', '{company_name}', '{logo}'],
            [$assignData->name, optional($request['emailInfo']->threadReplies[0])['message'], $request['emailInfo']->id, $request['assignId'], $request['emailInfo']->subject,
                optional($request['emailInfo']->threadStatus)->name, $ticket_reply, Auth::user()->name, preference('company_name'), $this->logo],
            $email->body
        );

        return $this->email->sendEmail($assignData->email, $subject, $message, $request['files'] ? $request['files'] : [], 'assignee');

    }
}
