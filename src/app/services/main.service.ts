import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { TServerResponse } from '../struct/types';

@Injectable()
export class MainService {

  baseURL: string;

  constructor(private http: HttpClient) {
    this.baseURL = 'http://localhost:3000';
  }

  /** GET: get data from server */
  doGet(url: string, callback?: (res: TServerResponse) => void): void {
    const dest = this.baseURL + url;
    const get = this.http.get<TServerResponse>(dest, getHeader());
    get.subscribe(
        value => this.executeCallback(value, callback),
        err =>  this.executeCallback(err.error, callback),
    );
  }

  /** POST: send data to server */
  doPost(url: string, data: any, callback?: (res: TServerResponse) => void): void {
    const dest = this.baseURL + url;
    const post = this.http.post<TServerResponse>(dest, data, getHeader());
    post.subscribe(
        value => {
            this.executeCallback(value, callback);
        },
        err =>  this.executeCallback(err.error, callback),
    );
  }

  /** PUT: send data to server */
  doPut(url: string, data: any, callback?: (res: TServerResponse) => void): void {
    const dest = this.baseURL + url;
    const post = this.http.put<TServerResponse>(dest, data, getHeader());
    post.subscribe(
        value => {
            this.executeCallback(value, callback);
        },
        err =>  this.executeCallback(err.error, callback),
    );
  }

  /** Store Token for authentication */
  doAuth(res: TServerResponse) {
    StoreToken(res.messages[0].tokenid);
  }

  private executeCallback(value: any, callback?: any) {
    if (callback) {
        callback(value);
    }
  }
}

/*---------------------------------------------------*/
function StoreToken(tokenid: string) {
  if (typeof(Storage) !== 'undefined') {
      localStorage.setItem('tokenid', tokenid);
      return true;
  } else {
      alert('Your Browser does not have support for this site');
      return false;
  }
}
/*---------------------------------------------------*/
function GetToken(): string {
  if (typeof(Storage) !== 'undefined') {
      let tokenid = localStorage.getItem('tokenid');
      if (!tokenid) {
          tokenid = '';
      }
      return tokenid;
  } else {
      alert('Your Browser does not have support for this site');
      return '';
  }
}
/*---------------------------------------------------*/
function getHeader() {
  return {
      headers: new HttpHeaders({
          'tokenid' : GetToken()
      }),
      withCredentials: true
  };
}
/*---------------------------------------------------*/
