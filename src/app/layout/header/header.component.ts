// src/app/layout/header/header.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterModule],
})
export class HeaderComponent {
  toggleTheme(): void {
    const body = document.body;
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
  }
}
