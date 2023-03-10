<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class WeatherResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'date'        => Carbon::now()->format('m/d/Y'),
            'main'        => $this->weather[0]->main,
            'temp'        => $this->main->temp,
            'description' => $this->weather[0]->description,
            'pressure'    => $this->main->pressure,
            'humidity'    => $this->main->humidity,
        ];
    }
}
