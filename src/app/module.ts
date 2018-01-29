// angular modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// materials
import {
  MatButtonModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatSidenavModule
} from '@angular/material';

// services and library
import { MainService } from './services/main.service';
import { SessionsService } from './services/sessions.service';
import { TSessionComponent } from './lib/session.component';

// components and modules
import { AppRoot } from './approot';
import { AppRoutes } from './routes';
import { Navbar } from './layouts/navbar';
import { LoginComponent, RegisterComponent } from './layouts/auth';
import { Sidenav } from './layouts/sidenav';

// views
import { HomePage } from './views/home';
import { EditionsComponent } from './views/tcgEditions/editions';
import { EditionsDetailComponent } from './views/tcgEditions/editions.detail';
import { TestComponent } from './views/test/test';

@NgModule({
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSidenavModule
  ],
  declarations: []
})
export class MaterialModule {}

@NgModule({
  declarations: [
    AppRoot,
    TSessionComponent,
    Navbar,
    Sidenav,
    HomePage,
    LoginComponent, RegisterComponent,
    EditionsComponent,
    EditionsDetailComponent,
    TestComponent,
  ],
  imports: [
    // angular modules
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    // router
    RouterModule.forRoot(AppRoutes),
    // materials
    MaterialModule
  ],
  entryComponents: [LoginComponent, RegisterComponent],
  providers: [MainService, SessionsService],
  bootstrap: [AppRoot]
})
export class AppModule { }
