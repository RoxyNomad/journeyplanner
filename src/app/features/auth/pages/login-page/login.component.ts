import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

import { AuthService } from '../../../../core/services/auth.services';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    // Angular Core
    CommonModule,
    ReactiveFormsModule,
    // Angular Router
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hidePassword = true;

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  loginForm: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login({ email, password }).subscribe({
        next: () => {
          console.log('Erfolgreich eingeloggt');
          this.router.navigate(['/dashboard']); // oder wohin du nach Login willst
        },
        error: (err) => {
          console.error('Login fehlgeschlagen', err);
        }
      });
    } else {
      console.log('Formular ist ungültig');
    }
  }
}
