import { Component, ViewEncapsulation } from '@angular/core';
import { TSessionComponent } from './lib/session.component';

@Component({
  selector: 'app-root',
  templateUrl: './approot.html',
  styleUrls: ['./approot.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppRoot extends TSessionComponent {
  OnRun() {
    // initializes session checks
    this.doCheck();
  }
}
