import { Component, OnInit } from '@angular/core';
import { TServerResponse } from '../../struct/types';
import { TRouteData } from '../../struct/types';
import { TEdition } from '../../struct/tcgtypes';

import { MainService } from '../../services/main.service';
import { SessionsService } from '../../services/sessions.service';

@Component({
  selector: 'app-home',
  templateUrl: './editions.html'
})
export class EditionsComponent implements OnInit {

  editions: TEdition[];
  session: any; // session content

  constructor(private service: MainService, private sessions: SessionsService) {
    this.editions = [];
  }

  ngOnInit() {
    // update session for every changes in sessions
    this.sessions.session.subscribe( data => {this.session = data});
    // get editions list
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
