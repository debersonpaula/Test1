import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { TServerResponse } from '../../struct/types';
import { TRouteData } from '../../struct/types';
import { TEdition } from '../../struct/tcgtypes';

@Component({
  selector: 'app-home',
  templateUrl: './editions.html'
})
export class EditionsComponent implements OnInit {

  editions: TEdition[];

  constructor(private service: MainService) {
    this.editions = [];
  }

  ngOnInit() {
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
