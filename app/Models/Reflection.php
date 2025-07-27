<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reflection extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'phone',
        'modules_completed',
        'learning_reflection',
        'platform_rating',
        'english_score',
    ];

    protected $casts = [
        'modules_completed' => 'array',
        'learning_reflection' => 'array',
        'platform_rating' => 'array',
    ];
}
