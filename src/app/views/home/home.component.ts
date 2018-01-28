import { Component } from '@angular/core';
import { TRouteData } from '../../struct/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {}

export const HomeData: TRouteData = {caption: 'Home', comp: HomeComponent, hideMenu: false, href: ''};
