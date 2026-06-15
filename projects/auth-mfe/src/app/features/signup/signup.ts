import { Component, inject } from '@angular/core';
import { SharedMaterialModule } from 'shared-material';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    SharedMaterialModule,
    ReactiveFormsModule,
  ],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {
  public signupForm: FormGroup;
  public router = inject(Router);
  private authService = inject(AuthService);

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
  firstName: ['', Validators.required],
  lastName: ['', Validators.required],

  email: [
    '',
    [
      Validators.required,
      Validators.email
    ]
  ],

  mobile: [
    '',
    [
      Validators.required,
      Validators.pattern(/^[0-9]{10}$/)
    ]
  ],

  password: [
    '',
    [
      Validators.required,
      Validators.minLength(6)
    ]
  ],

  confirmPassword: [
    '',
    Validators.required
  ],

  acceptTerms: [
    false,
    Validators.requiredTrue
  ]
});
  }

  navigateToLogin() {
    this.router.navigate(['/auth/login']);
  }

  register() {
    if (this.signupForm.valid) {
      const { firstName, lastName, email, mobile, password, confirmPassword } = this.signupForm.value;
      // Handle registration logic here, e.g., call a registration service
      console.log('Registration submitted', { firstName, lastName, email, mobile, password });
      const payload = {
        firstName,
        lastName,
        email,
        mobileNumber: mobile,
        password,
        confirmPassword,
      }
      this.authService.signup(payload).subscribe({
        next: (response) => {
          console.log(response)
          this.router.navigate(['/auth/login']);
        },
        error: (error) => {
          console.log(error)
        }
      })
    } else {
      console.log('Form is invalid');
    }
  }
}
