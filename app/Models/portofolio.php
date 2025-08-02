<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

    /**
 * @OA\Schema(
 *     schema="Portofolio",
 *     title="Portofolio",
 *     type="object",
 *     required={"id", "judul", "deskripsi"},
 *     @OA\Property(property="id", type="integer", example=1),
 *     @OA\Property(property="judul", type="string", example="Judul Portofolio"),
 *     @OA\Property(property="deskripsi", type="string", example="Deskripsi tentang project"),
 *     @OA\Property(property="link_video", type="string", format="url", nullable=true, example="https://youtube.com/..."),
 *     @OA\Property(property="file_path", type="string", nullable=true, example="uploads/portofolio/file.pdf"),
 *     @OA\Property(property="original_name", type="string", nullable=true, example="file.pdf"),
 *     @OA\Property(property="mime_type", type="string", nullable=true, example="application/pdf"),
 *     @OA\Property(property="created_at", type="string", format="date-time", example="2025-08-01T12:00:00Z"),
 *     @OA\Property(property="updated_at", type="string", format="date-time", example="2025-08-01T12:00:00Z")
 * )
 */

class portofolio extends Model
{
    /** @use HasFactory<\Database\Factories\PortofolioFactory> */
    use HasFactory;
    protected $fillable = [
        'judul',
        'deskripsi',
        'link_video',
        'original_name',
        'file_path',
        'mime_type',
    ];
}
