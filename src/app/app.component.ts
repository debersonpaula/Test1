import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MainService } from './services/main.service';
import { TServerResponse } from './struct/types';
import { RouteData } from './modules/mainrouter.module';
import { RouterEvent } from '@angular/router/src/events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'MTG';
  routelist = RouteData; // Route List to define pages
  session: any; // session content
  dropdownActive: boolean;
  currentRoute: string;

  constructor(private service: MainService, private router: Router) {
    this.session = false;
    this.dropdownActive = false;
    router.events.subscribe( (value: RouterEvent) => {
      this.currentRoute = value.url;
    });
  }

  ngOnInit() {
    this.getSession();
  }

  /** Execute Logout action */
  doLogout(): void {
    this.service.doGet('/user/logout', res => {
      if (res.status === 200) {
        window.location.replace('/');
      }
    });
  }

  private getSession(): void {
    this.service.doGet('/user', res => {
      if (res.status === 200) {
        this.session = res.messages[0];
      }
    });
  }
}
