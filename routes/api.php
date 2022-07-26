<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\AuthController;
use App\Http\Controllers\api\EmployeeController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/logout', function (Request $request) {
    $request->user()->currentToken->delete();
});
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/employee/store', "api\EmployeeController@store");
    Route::get('/employee', "api\EmployeeController@index");
    Route::delete('/employee/destroy', "api\EmployeeController@destroy");
    Route::get('/employee/{id}', "api\EmployeeController@show");

    //Route::resource('/employee', "api\\EmployeeController");
});
