<?php

namespace App\Http\Controllers\content;

use App\Http\Controllers\Controller;
use App\Models\feedback;
use Illuminate\Http\Request;

class feedbackController extends Controller
{
    /**
     * @OA\Post(
     *     path="/api/feedback",
     *     summary="Simpan jawaban survei",
     *     tags={"Survey"},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"learning_materials", "website_usability"},
     *             @OA\Property(property="learning_materials", type="string", example="Very effective"),
     *             @OA\Property(property="website_usability", type="string", example="Good")
     *         )
     *     ),
     *     @OA\Response(response=200, description="Response saved successfully"),
     *     @OA\Response(response=422, description="Validation error")
     * )
     */
    public function store(Request $request) {
        $validated = $request->validate([
            'learning_materials' => 'required|in:Very effective,Effective,Neutral,Ineffective,Very Ineffective',
            'website_usability' => 'required|in:Excellent,Good,Average,Poor,Very poor',
        ]);
        feedback::create($validated);

        return response()->json(['message' => 'Feedback submitted successfully']);
    }
    /**
     * @OA\Get(
     *     path="/api/feedback",
     *     summary="Lihat hasil ringkasan survei",
     *     tags={"Survey"},
     *     @OA\Response(
     *         response=200,
     *         description="Hasil agregat jawaban",
     *         @OA\JsonContent(
     *             @OA\Property(property="learning_materials_summary", type="object"),
     *             @OA\Property(property="website_usability_summary", type="object")
     *         )
     *     )
     * )
     */
    public function result(){
        $materials = feedback::selectRaw('learning_materials, COUNT(*) as total')
                     ->groupBy('learning_materials')
                     ->pluck('total', 'learning_materials');
        $usability = feedback::selectRaw('website_usability, COUNT(*) as total')
            ->groupBy('website_usability')
            ->pluck('total', 'website_usability');
        return response()->json([
            'learning_materials_summary' => $materials,
            'website_usability_summary' => $usability,
        ]);
    }
}
