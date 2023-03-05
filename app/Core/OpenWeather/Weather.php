<?php

namespace App\Core\OpenWeather;

use Illuminate\Support\Facades\Http;

class Weather
{
    protected string $appId = '';
    protected string $baseUrl;

    public function __construct()
    {
        $this->appId = config('openweather.appId');
        $this->baseUrl = config('openweather.base_url');
    }

    public function get(string $type, array $query)
    {
        $query = [...$query, ...['appid' => $this->appId]];

        $response = Http::get($this->baseUrl . $type, $query);

        return json_decode($response);
    }
}
