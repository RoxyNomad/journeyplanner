import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';

import { LoginComponent } from './pages/login-page/login.component';
import { RegisterComponent } from './pages/register-page/register.component';

export const authRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login | JourneyPlanner'
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Registrieren | JourneyPlanner'
  }
];
