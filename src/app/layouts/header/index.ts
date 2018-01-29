import { Component, ViewEncapsulation, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterEvent } from '@angular/router/src/events';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Header implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(private _router: Router) {
    this._router.events.subscribe((value: RouterEvent) => {
      // value
    });
  }

  ngOnInit() {
    //this._router.events.subscribe(() => {
      //console.log(this._route.snapshot.data['caption']);
    //});
  }
}
