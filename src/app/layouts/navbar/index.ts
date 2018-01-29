import { Component, OnInit } from '@angular/core';
import { TSessionComponent } from '../../lib/session.component';
import { MatDialog } from '@angular/material';
import { SessionsService } from '../../services/sessions.service';
import { LoginComponent, RegisterComponent } from '../auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class Navbar extends TSessionComponent {
  constructor(sessions: SessionsService, public dialog: MatDialog) {
    super(sessions);
  }

  openLogin() {
    let dialogRef = this.dialog.open(LoginComponent, {width: '250px'});
  }

  openRegister() {
    let dialogRef = this.dialog.open(RegisterComponent, {width: '290px'});
  }
}
