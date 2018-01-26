import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import { MainService } from './services/main.service';
import { TServerResponse } from './struct/types';
import { RouteData } from './modules/mainrouter.module';
import { RouterEvent } from '@angular/router/src/events';

import { SessionsService } from './services/sessions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'TCG';
  routelist = RouteData; // Route List to define pages
  session: any; // session content
  currentRoute: string;

  constructor(private sessions: SessionsService, private router: Router) {
    this.session = false;
    router.events.subscribe( (value: RouterEvent) => {
      this.currentRoute = value.url;
    });
  }

  ngOnInit() {
    // update session for every changes in sessions
    this.sessions.session.subscribe( data => {this.session = data});
    // check if user is logged
    this.sessions.checkSession();
  }

  /** Execute Logout action */
  doLogout(): void {
    this.sessions.stopSession();
  }
}
