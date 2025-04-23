// src/app/layout/footer/footer.component.ts
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [MatToolbarModule]
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  appName: string = 'Journey Planner';
  appVersion: string = '1.0.0';
  authorName: string = 'RoxyNomad';
  authorLink: string = 'www.roxynomad.com';
}
