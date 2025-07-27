<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class ApiMiddleware
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next)
    {
        // Tidak perlu validasi CSRF
        // Bisa tambahkan logic tambahan jika perlu (e.g., logging, token, dll)

        $response = $next($request);

        // Set header JSON jika ingin default API response
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }
}
