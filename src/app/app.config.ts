// src/app/app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { GoogleMapsModule } from '@angular/google-maps';

import { environment } from '../environments/environment';

const apiKey = environment.googleMapsApiKey;

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    provideGoogleMaps({ apiKey }),
  ]
};
function provideGoogleMaps(config: { apiKey: string }): import("@angular/core").Provider {
  return {
    provide: 'GOOGLE_MAPS_API_KEY',
    useValue: config.apiKey,
  };
}

