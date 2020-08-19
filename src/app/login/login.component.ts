import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() loggedIn: boolean;

  username: string;
  password: string;
  isUsernameError: boolean;
  isPasswordError: boolean;
  toggleRegister: boolean;

  constructor() {}

  ngOnInit(): void {}

  login() {
    if (!this.username || !this.password) {
      this.isUsernameError = this.username ? false : true;
      this.isPasswordError = this.password ? false : true;
      return;
    }
    console.log(this.username);
    console.log(this.password);
    this.loggedIn = true;
  }

  register() {
    this.toggleRegister = true;
  }
}
