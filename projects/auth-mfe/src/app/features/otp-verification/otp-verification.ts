import { Component, inject } from '@angular/core';
import { SharedMaterialModule } from 'shared-material';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-verification',
  imports: [
    SharedMaterialModule,
    ReactiveFormsModule,
  ],
  templateUrl: './otp-verification.html',
  styleUrl: './otp-verification.scss',
})
export class OtpVerification {
   private fb = inject(FormBuilder);

  otpSent = false;

  otpLoginForm = this.fb.group({
    mobileNumber: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[0-9]{10}$/)
      ]
    ],
    otp: ['']
  });

  sendOtp(): void {

    if (
      this.otpLoginForm.get('mobileNumber')?.invalid
    ) {
      this.otpLoginForm.markAllAsTouched();
      return;
    }

    this.otpSent = true;

    console.log(
      'OTP Sent To:',
      this.otpLoginForm.value.mobileNumber
    );
  }

  verifyOtp(): void {

    const otp = this.otpLoginForm.value.otp;

    if (otp === '123456') {

      console.log('OTP Verified');

      // Navigate dashboard
      // this.router.navigate(['/dashboard']);

    } else {

      alert('Invalid OTP');
    }
  }
}
