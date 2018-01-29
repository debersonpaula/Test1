import { Component, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Header {
  @Output() toggleSidenav = new EventEmitter<void>();
}
