<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\content\learningReflect;

Route::post('/learningReflect', [learningReflect::class, 'store']);
Route::get('/test', function () {
    return response()->json([
        'success' => true,
        'message' => 'API is working properly!',
    ]);
});
