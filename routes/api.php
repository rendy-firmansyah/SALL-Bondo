<?php

use App\Http\Controllers\content\learningReflect;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/learningReflect', [learningReflect::class, 'store'])->name('learningReflect.store');
