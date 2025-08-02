<?php

namespace App\Http\Controllers\content;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Portofolio;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

/**
 * @OA\Tag(
 *     name="Portofolio",
 *     description="API untuk pengelolaan portofolio"
 * )
 */

class PortofolioController extends Controller
{

    /**
     * @OA\Post(
     *     path="/api/porto",
     *     summary="Simpan data portofolio baru",
     *     tags={"Portofolio"},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\MediaType(
     *             mediaType="multipart/form-data",
     *             @OA\Schema(
     *                 required={"judul", "deskripsi"},
     *                 @OA\Property(property="judul", type="string", example="Judul Portofolio"),
     *                 @OA\Property(property="deskripsi", type="string", example="Deskripsi Portofolio"),
     *                 @OA\Property(property="link_video", type="string", format="url", nullable=true, example="https://youtube.com/..."),
     *                 @OA\Property(property="file", type="string", format="binary", nullable=true)
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Portofolio berhasil disimpan",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Portofolio berhasil disimpan.")
     *         )
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Validasi gagal",
     *         @OA\JsonContent(
     *             @OA\Property(property="errors", type="object")
     *         )
     *     )
     * )
     */

    public function store(Request $request)
    {
        $validated = Validator::make($request->all(), [
            'judul' => 'required|string|max:255',
            'deskripsi' => 'required|string|max:255',
            'link_video' => 'nullable|url|max:255',
            'file' => 'nullable|file|mimes:jpg,jpeg,png,pdf|max:5120',
        ]);

        if ($validated->fails()) {
            return response()->json(['errors' => $validated->errors()], 422);
        }
        
        $path = null;
        $originalName = null;
        $mimeType = null;

        if ($request->hasFile('file')) {

            $file = $request->file('file');
            $path = $file->store('uploads/portofolio', 'public');
            $originalName = $file->getClientOriginalName();
            $mimeType = $file->getClientMimeType();
        }
        // return response()->json(['message' => 'Data berhasil disimpan.']);

        $uploaded = Portofolio::create([
            'judul' => $request->judul,
            'deskripsi' => $request->deskripsi,
            'link_video' => $request->link_video ?? null,
            'file_path' => $path,
            'original_name' => $originalName,
            'mime_type' => $mimeType,
        ]);

        return response()->json(['message' => 'Portofolio berhasil disimpan.']);
    }

    /**
     * @OA\Get(
     *     path="/api/porto",
     *     summary="Ambil semua data portofolio",
     *     tags={"Portofolio"},
     *     @OA\Response(
     *         response=200,
     *         description="Daftar semua portofolio",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(ref="#/components/schemas/Portofolio")
     *         )
     *     )
     * )
     */

    public function index(){
        $portofolios = Portofolio::all();
        return response()->json($portofolios);
    }

    /**
     * @OA\Get(
     *     path="/api/porto/{id}",
     *     summary="Ambil detail portofolio berdasarkan ID",
     *     tags={"Portofolio"},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Detail portofolio ditemukan",
     *         @OA\JsonContent(ref="#/components/schemas/Portofolio")
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Portofolio tidak ditemukan",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Portofolio not found.")
     *         )
     *     )
     * )
     */

    public function show($id){
        $portofolio = Portofolio::find($id);

        if (!$portofolio) {
            return response()->json(['message' => 'Portofolio not found.'], 404);
        }

        return response()->json($portofolio);
    }
    
    /**
     * @OA\Delete(
     *     path="/api/porto/{id}",
     *     summary="Hapus portofolio berdasarkan ID",
     *     tags={"Portofolio"},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Portofolio berhasil dihapus",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Portofolio berhasil dihapus.")
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Portofolio tidak ditemukan",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Portofolio not found.")
     *         )
     *     )
     * )
     */
    public function delete($id) {
        $portofolio = Portofolio::find($id);

        if (!$portofolio) {
            return response()->json(['message' => 'Portofolio not found.'], 404);
        }

        $portofolio->delete();
        return response()->json(['message' => 'Portofolio berhasil dihapus.']);
    }
}
