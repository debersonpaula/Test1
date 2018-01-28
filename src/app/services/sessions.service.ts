import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { MainService } from './main.service';

@Injectable()
export class SessionsService {

  // session content
  private _sessionSource = new BehaviorSubject<any>(false);
  private _session = this._sessionSource.asObservable();

  constructor(
    private service: MainService
  ) { }

  /** get current session data */
  get session() {
    return this._session;
  }

  /** check sessions and store in the session data */
  startSession() {
    this.service.doGet('/user', res => {
      if (res.status === 200) {
        this._sessionSource.next(res.messages[0]);
      }
    });
  }

  /** destroy session and log out the user */
  stopSession() {
    this.service.doGet('/user/logout', res => {
      if (res.status === 200) {
        window.location.replace('/');
      }
    });
  }

}
