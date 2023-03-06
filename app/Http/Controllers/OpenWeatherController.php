<?php

namespace App\Http\Controllers;

use App\Core\OpenWeather\Weather;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Requests\WeatherRequest as Request;
use App\Http\Resources\WeatherResource as Resource;

class OpenWeatherController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $service = new Weather();

        $response = $service->get('weather', ['q' => $request->get('city')]);

        if ($response->cod === 200) {
            return new Resource($response);
        }

        return response()->json($response, Response::HTTP_BAD_REQUEST);
    }
}
