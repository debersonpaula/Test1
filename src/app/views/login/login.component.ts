import { Component, OnInit } from '@angular/core';
import { TRouteData, TUserLogin } from '../../struct/types';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  UserLogin: TUserLogin;
  NotifyMessage: string;

  constructor(private service: MainService) {
    this.UserLogin = {username: '', userpass: ''};
  }

  ngOnInit() {
  }

  submitLogin(): void {
    this.service.doPost('/user/login', this.UserLogin, res => {
      if (res.status === 200) {
        this.NotifyMessage = '';
        this.service.doAuth(res);
        window.location.replace('/');
      } else {
        this.NotifyMessage = res  .messages.toString();
      }
    });
  }

}

export const LoginData: TRouteData = {caption: 'Login', href: 'login', comp: LoginComponent, hideMenu: true};
