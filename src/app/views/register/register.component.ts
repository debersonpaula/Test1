import { Component, OnInit } from '@angular/core';
import { TRouteData, TUser } from '../../struct/types';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  UserRegister: TUser;
  NotifyMessage: string;
  PassConfirmation: string;

  constructor(private service: MainService) {
    this.UserRegister = {username: '', userpass: '', firstname: '', lastname: ''};
    this.PassConfirmation = '';
  }

  ngOnInit() {
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

export const RegisterData: TRouteData = {caption: 'Register', href: 'register', comp: RegisterComponent, hideMenu: true};
