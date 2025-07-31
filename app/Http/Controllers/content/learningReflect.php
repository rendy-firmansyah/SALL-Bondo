<?php

namespace App\Http\Controllers\content;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Reflection;

class learningReflect extends Controller
{
/**
 * @OA\Post(
 *     path="/api/learningReflect",
 *     tags={"Reflections"},
 *     summary="Submit reflection form",
 *     description="Store user reflection from SALL-Bondo platform",
 *     @OA\RequestBody(
 *         required=true,
 *         @OA\JsonContent(
 *             @OA\Property(property="name", type="string", example="Budi Santoso"),
 *             @OA\Property(property="phone", type="string", example="081234567890"),
 *             @OA\Property(property="modules", type="array", @OA\Items(type="string")),
 *             
 *             @OA\Property(
 *                 property="learning_reflection",
 *                 type="object",
 *                 @OA\Property(property="new_knowledge", type="string", example="Saya belajar banyak kosa kata baru."),
 *                 @OA\Property(property="how_helped", type="string", example="Materi mudah dipahami dan kontekstual."),
 *                 @OA\Property(property="confidence", type="string", example="Saya jadi lebih percaya diri berbicara dalam bahasa Inggris."),
 *                 @OA\Property(property="reading_improvement", type="string", example="Kemampuan membaca meningkat."),
 *                 @OA\Property(property="listening_improvement", type="string", example="Lebih mudah memahami percakapan."),
 *                 @OA\Property(property="overall_improvement", type="string", example="Ada peningkatan signifikan."),
 *                 @OA\Property(property="english_score", type="integer", example=8)
 *             ),
 *             
 *             @OA\Property(
 *                 property="platform_rating",
 *                 type="object",
 *                 @OA\Property(property="easy_to_use", type="integer", example=5),
 *                 @OA\Property(property="clear_instructions", type="integer", example=4),
 *                 @OA\Property(property="no_technical_issue", type="integer", example=5),
 *                 @OA\Property(property="attractive_platform", type="integer", example=5),
 *                 @OA\Property(property="appropriate_level", type="integer", example=4),
 *                 @OA\Property(property="cultural_relevance", type="integer", example=5),
 *                 @OA\Property(property="real_life_context", type="integer", example=5),
 *                 @OA\Property(property="reading_skill", type="integer", example=4),
 *                 @OA\Property(property="listening_skill", type="integer", example=4),
 *                 @OA\Property(property="local_identity", type="integer", example=5),
 *                 @OA\Property(property="learning_enjoyment", type="integer", example=5),
 *                 @OA\Property(property="interactivity", type="integer", example=5),
 *                 @OA\Property(property="independent_learning", type="integer", example=4),
 *                 @OA\Property(property="learner_needs", type="integer", example=4),
 *                 @OA\Property(property="overall_satisfaction", type="integer", example=5),
 *                 @OA\Property(property="recommend_to_friends", type="integer", example=5),
 *                 @OA\Property(property="liked_aspect", type="string", example="Fitur interaktif dan konten lokal."),
 *                 @OA\Property(property="disliked_aspect", type="string", example="Beberapa modul terlalu panjang."),
 *                 @OA\Property(property="challenges", type="string", example="Koneksi internet lambat."),
 *                 @OA\Property(property="suggestions", type="string", example="Tambahkan fitur audio interaktif.")
 *             )
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
        ]);

        return response()->json([
            'message' => 'Refleksi berhasil disimpan.',
            'data' => $reflection
        ], 201);
    }

    /**
 * @OA\Get(
 *     path="/api/learningReflect",
 *     tags={"Reflections"},
 *     summary="Get all reflections",
 *     description="Retrieve all user reflection data from the SALL-Bondo platform.",
 *     operationId="getAllReflections",
 *     @OA\Response(
 *         response=200,
 *         description="List of reflections retrieved successfully",
 *         @OA\JsonContent(
 *             type="array",
 *             @OA\Items(
 *                 type="object",
 *                 @OA\Property(property="id", type="integer", example=1),
 *                 @OA\Property(property="name", type="string", example="Budi Santoso"),
 *                 @OA\Property(property="phone", type="string", example="081234567890"),
 *                 @OA\Property(
 *                     property="modules_completed",
 *                     type="array",
 *                     @OA\Items(type="string"),
 *                     example={"Module 1", "Module 2"}
 *                 ),
 *                 @OA\Property(
 *                     property="learning_reflection",
 *                     type="object",
 *                     @OA\Property(property="new_knowledge", type="string", example="Saya belajar banyak kosa kata baru.")
 *                 ),
 *                 @OA\Property(
 *                     property="platform_rating",
 *                     type="object",
 *                     @OA\Property(property="easy_to_use", type="integer", example=5)
 *                 ),
 *                 @OA\Property(property="created_at", type="string", format="date-time", example="2025-07-31T14:25:36.000000Z"),
 *                 @OA\Property(property="updated_at", type="string", format="date-time", example="2025-07-31T14:25:36.000000Z")
 *             )
 *         )
 *     )
 * )
 */


    public function index (){
        $reflections = Reflection::all();
        return response()->json($reflections);
    }
}
