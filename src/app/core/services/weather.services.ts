// src/app/core/services/weather.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface WeatherData {
  current: {
    temp: number;
    weather: {
      description: string;
      icon: string;
    }[];
  };
}

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private apiKey = environment.WeatherApiKey;
  private currentWeatherUrl = 'https://api.weatherapi.com/v1/current.json';
  private forecastUrl = 'https://api.weatherapi.com/v1/forecast.json';

  constructor(private http: HttpClient) {}

  // Hole das aktuelle Wetter für gegebene Koordinaten
  getWeather(lat: number, lng: number): Observable<any> {
    const url = `${this.currentWeatherUrl}?key=${this.apiKey}&q=${lat},${lng}`;
    return this.http.get<any>(url);
  }

  // Hole die Wettervorhersage für gegebene Koordinaten
  getForecast(lat: number, lng: number, days: number = 8): Observable<any> {
    const url = `${this.forecastUrl}?key=${this.apiKey}&q=${lat},${lng}&days=${days}`;
    return this.http.get<any>(url);
  }
}
