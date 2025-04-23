import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

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
      ({
        next: (): void => {
          console.log('Erfolgreich eingeloggt');
          this.router.navigate(['/dashboard']); // oder wohin du nach Login willst
        },
        error: (err: unknown): void => {
          console.error('Login fehlgeschlagen', err);
        }
      });
    } else {
      console.log('Formular ist ungültig');
    }
  }
}
