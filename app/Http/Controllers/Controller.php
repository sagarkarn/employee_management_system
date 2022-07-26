<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function sendSuccess($result, $code = 200)
    {
        return [
            "status" => "success",
            "result" => json_encode($result),
            "status_code" => $code
        ];
    }
    public function sendError($code = 500, $message)
    {
        return [
            "status" => 'fail',
            'message' => $message,
            'status_code' => $code
        ];
    }
}
