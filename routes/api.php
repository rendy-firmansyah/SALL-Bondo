<?php

use App\Http\Controllers\content\feedbackController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\content\learningReflect;
use App\Http\Controllers\content\PertanyaanLearningController;

Route::post('/learningReflect', [learningReflect::class, 'store']);
Route::get('/learningReflect', [learningReflect::class, 'index']);
Route::get('/learningReflect/{id}', [learningReflect::class, 'show']);
Route::get('/test', function () {
    return response()->json([
        'success' => true,
        'message' => 'API is working properly!',
    ]);
});
Route::post('/feedback', [feedbackController::class, 'store']);
Route::get('/feedback', [feedbackController::class, 'result']);
Route::post('/questionLearningReflect', [PertanyaanLearningController::class, 'store']);
Route::get('/questionLearningReflect', [PertanyaanLearningController::class, 'index']);
Route::delete('/questionLearningReflect/{id}', [PertanyaanLearningController::class, 'delete']);