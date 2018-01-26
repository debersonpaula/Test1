import { Component, OnInit } from '@angular/core';
import { TServerResponse } from '../../struct/types';
import { TRouteData } from '../../struct/types';
import { TEdition } from '../../struct/tcgtypes';

import { MainService } from '../../services/main.service';
import { SessionsService } from '../../services/sessions.service';

import { TSessionComponent } from '../../lib/session.component';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './editions.html'
})
// export class EditionsComponent implements OnInit {
export class EditionsComponent extends TSessionComponent {
  /** editions list */
  editions: TEdition[];

  constructor (sessions: SessionsService, private service: MainService) {
    super(sessions);
  }

  OnRun() {
    console.log('on run');
    this.getEditions();
  }

  private getEditions() {
    this.service.doGet('/api/edition', res => {
      if (res.status === 200) {
        this.editions = res.messages;
      }
    });
  }

}

export const EditionsData: TRouteData = {caption: 'Editions', comp: EditionsComponent, hideMenu: false, href: 'editions'};
