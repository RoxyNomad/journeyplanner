import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';
import { WeatherService } from '../../core/services/weather.services';

@Component({
  selector: 'app-map-weather',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  weather: any;
  forecast: any;

  zoom = 6;
  center: google.maps.LatLngLiteral = { lat: 47.518458, lng: 7.68906 }; // Startkoordinaten (Pratteln)
  markerPosition: google.maps.LatLngLiteral = this.center;
  markerOptions: google.maps.MarkerOptions = { draggable: false };

  constructor(private weatherService: WeatherService) {}

  getWeekday(dateString: string): string {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString);
    return days[date.getDay()];
  }

  onMapClick(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      // Setze die Markerposition auf die geklickte Stelle
      this.markerPosition = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      };

      // Hole das aktuelle Wetter für die neuen Koordinaten
      this.weatherService.getWeather(this.markerPosition.lat, this.markerPosition.lng)
        .subscribe((data: any) => {
          this.weather = data;  // Setze die aktuellen Wetterdaten
          console.log(this.weather);  // Optional: Ausgabe der Wetterdaten in der Konsole
        });

      // Hole die Wettervorhersage für die neuen Koordinaten
      this.weatherService.getForecast(this.markerPosition.lat, this.markerPosition.lng)
        .subscribe((data: any) => {
          this.forecast = data.forecast.forecastday;  // Setze die Vorhersagedaten
          console.log(this.forecast);  // Optional: Ausgabe der Vorhersagedaten in der Konsole
        });

    }
  }
}

function getWeekday(dateString: string): string {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date(dateString);
  return days[date.getDay()];
}

