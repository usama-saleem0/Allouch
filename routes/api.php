<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Paypalcontroller;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\MerchandiseController;





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

Route::post('login', [Api\AuthController::class, 'login']);
Route::post('register', [Api\RegisterController::class, 'register']);
Route::post('forgot', [Api\ForgotController::class, 'forgot']);
Route::post('reset', [Api\ForgotController::class, 'reset']);
Route::get('email/resend/{user}', [Api\VerifyController::class, 'resend'])->name('verification.resend');
Route::get('email/verify/{id}', [Api\VerifyController::class, 'verify'])->name('verification.verify');; // Make sure to keep this as your route name
Route::post('api/profile', [Api\RegisterController::class, 'profile']);
Route::post('brand_register', [Api\RegisterController::class, 'brand_register']);
Route::post('businesstype', [Api\RegisterController::class, 'businesstype']);
Route::post('country', [Api\RegisterController::class, 'country']);



Route::get('process-transaction', [Paypalcontroller::class, 'processTransaction'])->name('processTransaction');


Route::post('create-transaction', [Paypalcontroller::class, 'createTransaction'])->name('createTransaction');

Route::get('create-transaction', [Paypalcontroller::class, 'createTransaction'])->name('createTransaction');
// Route::get('process-transaction', [Paypalcontroller::class, 'processTransaction'])->name('processTransaction');
Route::get('success-transaction', [Paypalcontroller::class, 'successTransaction'])->name('successTransaction');
Route::get('cancel-transaction', [Paypalcontroller::class, 'cancelTransaction'])->name('cancelTransaction');




Route::group(['middleware' => ['auth:api']], function () {
    Route::get('user', [Api\AuthController::class, 'user']);
    Route::post('api/edit_profile', [ProfileController::class, 'edit_profile']);

    Route::get('getuser', [ProfileController::class, 'getuser']);
    Route::get('getprofile', [ProfileController::class, 'getprofile']);

    Route::get('getpackage', [ProfileController::class, 'getpackage']);

    Route::post('api/package', [ProfileController::class, 'package']);

    Route::get('getinfluencer', [ProfileController::class, 'getinfluencer']);
    Route::get('get_influencers', [ProfileController::class, 'getinfluencers']);
    Route::get('get_all_influencers', [ProfileController::class, 'getallinfluencers']);

    Route::get('getmerchandise', [MerchandiseController::class, 'getmerchandise']);
    Route::get('getmerchandises', [MerchandiseController::class, 'getmerchandises']);




    Route::get('getuserchat', [ChatController::class, 'getuser']);

    Route::post('chats', [ChatController::class, 'chats']);
    Route::post('api/merchandise', [MerchandiseController::class, 'addmerchandise']);


    Route::get('getchat', [ChatController::class, 'getchat']);
    

    
   
});
