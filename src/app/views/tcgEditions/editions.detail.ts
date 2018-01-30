import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TServerResponse } from '../../struct/types';
import { TRouteData } from '../../struct/types';
import { TEdition } from '../../struct/tcgtypes';

import { MainService } from '../../services/main.service';
import { SessionsService } from '../../services/sessions.service';
import { TSessionComponent } from '../../lib/session.component';
import { ObjectID } from 'bson';

@Component({
  selector: 'app-edition-detail',
  templateUrl: './editions.detail.html'
})
export class EditionsDetailComponent extends TSessionComponent {
  @Input() item: TEdition;

  constructor(
    sessions: SessionsService,
    private route: ActivatedRoute,
    private service: MainService,
    private location: Location) {
      super(sessions);
    }

  OnRun() {
    this.getItem();
  }

  goBack(): void {
    this.location.back();
  }

  getItem(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != '0') {
      this.service.doGet('/api/edition/' + id, res => {
        if (res.status === 200) {
          this.item = res.messages[0];
        }
      });
    } else {
      this.item = new TEdition;
    }
  }

  save(): void {
    if (this.item._id) {
      this.service.doPut('/api/edition/', this.item, res => {
        if (res.status === 200) {
          this.item = res.messages[0];
        }
      });
    } else {
      this.service.doPost('/api/edition', this.item, res => {
        if (res.status === 200) {
          this.item = res.messages[0];
        }
      });
    }
  }
}

export const EditionsDetailData: TRouteData = {caption: 'Editions', comp: EditionsDetailComponent, hideMenu: true, href: 'edition/:id'};
