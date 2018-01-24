import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MainService } from '../../services/main.service';
import { TServerResponse } from '../../struct/types';
import { TRouteData } from '../../struct/types';
import { TEdition } from '../../struct/tcgtypes';

@Component({
  selector: 'app-edition-detail',
  templateUrl: './editions.detail.html'
})
export class EditionsDetailComponent implements OnInit {
  @Input() item: TEdition;

  constructor(
    private route: ActivatedRoute,
    private service: MainService,
    private location: Location) {}

  ngOnInit() {
    this.getItem();
  }

  goBack(): void {
    this.location.back();
  }

  getItem(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.doGet('/api/edition/' + id, res => {
      if (res.status === 200) {
        console.log('edition = ', res);
        this.item = res.messages[0];
      }
    });
  }

  save(): void {
    // const id = this.item._id;
    this.service.doPut('/api/edition/', this.item, res => {
      if (res.status === 200) {
        console.log('edition = ', res);
        this.item = res.messages[0];
      }
    });
  }

}

export const EditionsDetailData: TRouteData = {caption: 'Editions', comp: EditionsDetailComponent, hideMenu: true, href: 'edition/:id'};
