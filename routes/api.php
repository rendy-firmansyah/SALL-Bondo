<?php

use App\Http\Controllers\content\feedbackController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\content\learningReflect;

Route::post('/learningReflect', [learningReflect::class, 'store']);
Route::get('/test', function () {
    return response()->json([
        'success' => true,
        'message' => 'API is working properly!',
    ]);
});
Route::post('/feedback', [feedbackController::class, 'store']);
Route::get('/feedback', [feedbackController::class, 'result']);