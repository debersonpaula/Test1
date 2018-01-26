import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import {
  MatButtonModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

import { MainService } from './services/main.service';
import { SessionsService } from './services/sessions.service';

import { AppComponent } from './app.component';
import { MainrouterModule } from './modules/mainrouter.module';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { EditionsComponent } from './views/tcgEditions/editions';
import { EditionsDetailComponent } from './views/tcgEditions/editions.detail';

@NgModule({
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    EditionsComponent,
    EditionsDetailComponent
  ],
  imports: [
    // angular modules
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    // router
    MainrouterModule,
    // materials
    MaterialModule
  ],
  providers: [MainService, SessionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
