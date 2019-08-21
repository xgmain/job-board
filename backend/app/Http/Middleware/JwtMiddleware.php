<?php
namespace App\Http\Middleware;

use Tymon\JWTAuth\Http\Middleware;
use Tymon\JWTAuth\Http\Middleware\BaseMiddleware;
use Closure;

class JwtMiddleware extends BaseMiddleware
{
    public function handle($request, Closure $next , $guard = null)
    {
        // dd($request->all());
        $token = $request->get('token');
        
        if(!$token) {
            // Unauthorized response if token not there
            return response()->json(['error' => 'Token not provided.'], 401);
        }

        try {

            $this->authenticate($request);

            return $next($request);

        } catch (\Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {

            return response()->json(['token_expired'], 500);

        } catch (\Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {

            return response()->json(['token_invalid'], 500);

        }
    }
}