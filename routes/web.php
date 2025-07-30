<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::get('/learning-reflection', function () {
    return Inertia::render('learning');
})->name('learning');

Route::get('/feedback', function () {
    return Inertia::render('feedback');
})->name('feedback');

Route::get('/SurveyPage', function () {
    return Inertia::render('surveyPage');
})->name('surveyPage');

Route::get('/resources', function () {
    return Inertia::render('resources'); 
})->name('resources');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
