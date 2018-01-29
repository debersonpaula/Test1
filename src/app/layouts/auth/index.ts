import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { TUserLogin, TUser } from '../../struct/types';
import { MainService } from '../../services/main.service';

/*=========================================================================*/
/*=== Login ===============================================================*/
/*=========================================================================*/
@Component({
  selector: 'app-login',
  templateUrl: './login.html'
})
export class LoginComponent {
  UserLogin: TUserLogin;
  NotifyMessage: string;
  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private service: MainService) {
      this.UserLogin = {username: '', userpass: ''};
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  submitLogin(): void {
    this.service.doPost('/user/login', this.UserLogin, res => {
      if (res.status === 200) {
        this.NotifyMessage = '';
        this.service.doAuth(res);
        window.location.replace('/');
      } else {
        this.NotifyMessage = res.messages.toString();
      }
    });
  }
}
/*=========================================================================*/
/*=== Register ============================================================*/
/*=========================================================================*/
@Component({
  selector: 'app-register',
  templateUrl: './register.html'
})
export class RegisterComponent {
  UserRegister: TUser;
  NotifyMessage: string;
  PassConfirmation: string;
  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private service: MainService) {
      this.UserRegister = {username: '', userpass: '', firstname: '', lastname: ''};
      this.PassConfirmation = '';
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  submitRegister(): void {
    if (this.PassConfirmation === this.UserRegister.userpass) {
      this.service.doPost('/user', this.UserRegister, res => {
        if (res.status === 200) {
          this.NotifyMessage = '';
          this.service.doAuth(res);
          window.location.replace('/');
        } else {
          this.NotifyMessage = res.messages.toString();
        }
      });
    } else {
      this.NotifyMessage = 'Password confirmation should be the same';
    }
  }
}
