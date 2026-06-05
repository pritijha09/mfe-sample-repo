import { Component, inject } from '@angular/core';
import { SharedMaterialModule } from 'shared-material';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [SharedMaterialModule,
    ReactiveFormsModule,],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.scss',
})
export class ForgotPassword {
  private fb = inject(FormBuilder);

  otpSent = false;
  otpVerified = false;

  hidePassword = true;
  hideConfirmPassword = true;

  forgotPasswordForm = this.fb.group({
    emailOrMobile: [
      '',
      Validators.required
    ],

    otp: [''],

    newPassword: [''],

    confirmPassword: ['']
  });

  sendOtp(): void {

    if (
      this.forgotPasswordForm
        .get('emailOrMobile')
        ?.invalid
    ) {
      return;
    }

    this.otpSent = true;

    console.log(
      'OTP Sent',
      this.forgotPasswordForm.value.emailOrMobile
    );
  }

  verifyOtp(): void {

    const otp =
      this.forgotPasswordForm.value.otp;

    if (otp === '123456') {

      this.otpVerified = true;

      this.forgotPasswordForm
        .get('newPassword')
        ?.setValidators([
          Validators.required,
          Validators.minLength(6)
        ]);

      this.forgotPasswordForm
        .get('confirmPassword')
        ?.setValidators([
          Validators.required
        ]);

      this.forgotPasswordForm
        .get('newPassword')
        ?.updateValueAndValidity();

      this.forgotPasswordForm
        .get('confirmPassword')
        ?.updateValueAndValidity();
    }
  }

  resetPassword(): void {

    if (
      this.forgotPasswordForm.invalid
    ) {
      this.forgotPasswordForm.markAllAsTouched();
      return;
    }

    console.log(
      'Password Reset Successful',
      this.forgotPasswordForm.value
    );
  }
}
