import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  errorMessage: string;
  confirmPassword: string;
  isFirstNameError: boolean;
  isLastNameError: boolean;
  isEmailError: boolean;
  isPasswordError: boolean;
  isConfirmPasswordError: boolean;
  isPasswordMismatch: boolean;

  constructor() {}

  ngOnInit(): void {
    this.isPasswordMismatch = false;
  }

  confirm(): void {
    if (
      !this.firstName ||
      !this.lastName ||
      !this.email ||
      !this.password ||
      !this.confirmPassword
    ) {
      this.isFirstNameError = this.firstName ? false : true;
      this.isLastNameError = this.lastName ? false : true;
      this.isEmailError = this.email ? false : true;
      this.isPasswordError = this.password ? false : true;
      this.isConfirmPasswordError = this.confirmPassword ? false : true;
      this.errorMessage = '*Mandatory field should be filled';
      console.log('hello');
      return;
    }

    if (this.confirmPassword !== this.password) {
      this.isPasswordMismatch = true;
      console.log(this.password);
      console.log(this.confirmPassword);
      this.errorMessage = '*Password mis-match';
      return;
    }

    this.errorMessage = '';
    this.isPasswordMismatch = false;
  }
}
