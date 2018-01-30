import { Component, ViewEncapsulation, NgZone, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';
import { TSessionComponent } from '../../lib/session.component';
import { SessionsService } from '../../services/sessions.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.html',
  styleUrls: ['./sidenav.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Sidenav extends TSessionComponent {
  private mediaMatcher: MediaQueryList = matchMedia('(max-width: 720px)');
  @ViewChild(MatSidenav) sidenav: MatSidenav;

  constructor(sessions: SessionsService, private _router: Router, zone: NgZone) {
    super(sessions);
    this.mediaMatcher.addListener(mql => zone.run(() => this.mediaMatcher = mql));
  }

  ngOnInit() {
    this._router.events.subscribe(() => {
      if (this.isScreenSmall()) {
        this.sidenav.close();
      }
    });
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }
}
