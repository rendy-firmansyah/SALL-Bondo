<?php

namespace App\Http\Controllers\content;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Pertanyaan_Learning;
use Illuminate\Support\Facades\Validator;

class PertanyaanLearningController extends Controller
{

    /**
 * @OA\Post(
 *     path="/api/questionLearningReflect",
 *     tags={"Pertanyaan Learning"},
 *     summary="Simpan data pertanyaan learning",
 *     description="Menyimpan data pertanyaan learning ke dalam database",
 *     operationId="storePertanyaanLearning",
 *     @OA\RequestBody(
 *         required=true,
 *         @OA\JsonContent(
 *             required={"name_key", "pages", "keterangan"},
 *             @OA\Property(property="name_key", type="string", example="identitas_pertanyaan"),
 *             @OA\Property(property="pages", type="string", example="learning_materials"),
 *             @OA\Property(property="keterangan", type="string", example="Pertanyaan mengenai materi A")
 *         )
 *     ),
 *     @OA\Response(
 *         response=200,
 *         description="Pertanyaan berhasil disimpan.",
 *         @OA\JsonContent(
 *             @OA\Property(property="message", type="string", example="Pertanyaan berhasil disimpan.")
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

    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'name_key' => 'required|string|max:255',
            'pages' => 'required|string|max:255',
            'keterangan' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        Pertanyaan_Learning::create($validator->validated());

        return response()->json(['message' => 'Pertanyaan berhasil disimpan.']);
    }
    
    /**
     * @OA\Get(
     *     path="/api/questionLearningReflect",
     *     tags={"Pertanyaan Learning"},
     *     summary="Ambil semua pertanyaan learning",
     *     description="Mengambil seluruh data pertanyaan learning dari database",
     *     operationId="getAllPertanyaanLearning",
     *     @OA\Response(
     *         response=200,
     *         description="Berhasil mengambil data pertanyaan learning",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="name_key", type="string", example="identitas_pertanyaan"),
     *                 @OA\Property(property="pages", type="string", example="learning_materials"),
     *                 @OA\Property(property="keterangan", type="string", example="Pertanyaan mengenai materi A"),
     *                 @OA\Property(property="created_at", type="string", format="date-time", example="2025-07-30T12:00:00Z"),
     *                 @OA\Property(property="updated_at", type="string", format="date-time", example="2025-07-30T12:00:00Z")
     *             )
     *         )
     *     )
     * )
     */
    public function index() {
        $pertanyaan = Pertanyaan_Learning::all();
        return response()->json($pertanyaan);
    }
}
