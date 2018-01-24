import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { TRouteData } from '../struct/types';
import { HomeData } from '../views/home/home.component';
import { LoginData } from '../views/login/login.component';
import { RegisterData } from '../views/register/register.component';
import { EditionsData } from '../views/tcgEditions/editions';
import { EditionsDetailData } from '../views/tcgEditions/editions.detail';

// create route data list
export const RouteData: TRouteData[] = [ HomeData, LoginData, RegisterData, EditionsData, EditionsDetailData ];

// generate route components from RouteData
const routes: Routes = [];
for (let i = 0; i < RouteData.length; i++) {
  routes.push( {path: RouteData[i].href, component: RouteData[i].comp} );
}

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class MainrouterModule { }
