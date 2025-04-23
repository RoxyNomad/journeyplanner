import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './features/home/home-page.component';
import { TripComponent } from './features/trip/trip.component';
import { FavoritesComponent } from './features/favorites/favorites.component';
import { BudgetComponent } from './features/budget/budget.component';
import { MapComponent } from './features/map/map.component';
import { authRoutes } from './features/auth/auth.routes';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      ...authRoutes,
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/pages/dashboard.component').then(m => m.DashboardComponent)
      },
      { path: 'trip', component: TripComponent },
      { path: 'favorites', component: FavoritesComponent },
      { path: 'budget', component: BudgetComponent },
      { path: 'map', component: MapComponent }
    ]
  }
];
