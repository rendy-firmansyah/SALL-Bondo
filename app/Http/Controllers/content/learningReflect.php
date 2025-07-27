<?php

namespace App\Http\Controllers\content;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Reflection;

/**
 * @OA\Info(
 *     version="1.0.0",
 *     title="SALL-Bondo API Documentation",
 *     description="Dokumentasi API untuk platform refleksi pembelajaran SALL-Bondo.",
 *     @OA\Contact(
 *         email="ikafitriani@unej.ac.id"
 *     )
 * )
 */

class learningReflect extends Controller
{
    /**
 * @OA\Post(
 *     path="/api/reflections",
 *     tags={"Reflections"},
 *     summary="Submit reflection form",
 *     description="Store user reflection from SALL-Bondo platform",
 *     @OA\RequestBody(
 *         required=true,
 *         @OA\JsonContent(
 *             example={
 *                 "name": "Budi Santoso",
 *                 "phone": "081234567890",
 *                 "modules": {
 *                     "Learning Modul Chapter 1",
 *                     "Learning Modul Chapter 3",
 *                     "Learning Modul Chapter 6"
 *                 },
 *                 "learning_reflection": {
 *                     "new_knowledge": "Saya belajar banyak kosa kata baru.",
 *                     "how_helped": "Materi mudah dipahami dan kontekstual.",
 *                     "confidence": "Saya jadi lebih percaya diri berbicara dalam bahasa Inggris.",
 *                     "reading_improvement": "Kemampuan membaca meningkat.",
 *                     "listening_improvement": "Lebih mudah memahami percakapan.",
 *                     "overall_improvement": "Ada peningkatan signifikan."
 *                 },
 *                 "platform_rating": {
 *                     "easy_to_use": 5,
 *                     "clear_instructions": 4,
 *                     "no_technical_issue": 5,
 *                     "attractive_platform": 5,
 *                     "appropriate_level": 4,
 *                     "cultural_relevance": 5,
 *                     "real_life_context": 5,
 *                     "reading_skill": 4,
 *                     "listening_skill": 4,
 *                     "local_identity": 5,
 *                     "learning_enjoyment": 5,
 *                     "interactivity": 5,
 *                     "independent_learning": 4,
 *                     "learner_needs": 4,
 *                     "overall_satisfaction": 5,
 *                     "recommend_to_friends": 5,
 *                     "liked_aspect": "Fitur interaktif dan konten lokal.",
 *                     "disliked_aspect": "Beberapa modul terlalu panjang.",
 *                     "challenges": "Koneksi internet lambat.",
 *                     "suggestions": "Tambahkan fitur audio interaktif."
 *                 },
 *                 "english_score": 8
 *             }
 *         )
 *     ),
 *     @OA\Response(
 *         response=201,
 *         description="Success"
 *     ),
 *     @OA\Response(
 *         response=422,
 *         description="Validation error"
 *     )
 * )
 */


    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'modules' => 'required|array|min:1',
            'learning_reflection' => 'required|array',
            'platform_rating' => 'required|array',
            'english_score' => 'required|integer|min:1|max:10',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $reflection = Reflection::create([
            'name' => $request->name,
            'phone' => $request->phone,
            'modules_completed' => json_encode($request->modules),
            'learning_reflection' => json_encode($request->learning_reflection),
            'platform_rating' => json_encode($request->platform_rating),
            'english_score' => $request->english_score,
        ]);

        return response()->json([
            'message' => 'Refleksi berhasil disimpan.',
            'data' => $reflection
        ], 201);
    }
}
