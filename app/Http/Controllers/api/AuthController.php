<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function Login(Request $request)
    {
        $email = $request->json('email');
        $password = $request->json('password');

        $passwordMatch = Auth::attempt(['email' => $email, 'password' => $password]);

        if ($passwordMatch) {
            $user = Auth::user();
            return ['status' => 'success', 'result' => $user->createToken('app')->plainTextToken];
        } else {
            return json_encode([
                'status' => 'failed',
                'message' => 'Password did not matched'
            ]);
        }
    }
}
