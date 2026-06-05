import { Component, inject } from '@angular/core';
import { SharedMaterialModule } from 'shared-material';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedMaterialModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  public loginForm: FormGroup;
  public hidePassword = true;
  public fb = inject(FormBuilder);
  public router = inject(Router);

  constructor() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      // Handle login logic here, e.g., call an authentication service
      console.log('Login submitted', { username, password });
    } else {
      console.log('Form is invalid');
    }
  }

  createAccount() {
    // Handle create account logic here, e.g., navigate to the signup page
    console.log('Navigate to signup page');
    this.loginForm.reset();
    this.hidePassword = true;
    this.router.navigate(['/auth/signup']);
  }


}
