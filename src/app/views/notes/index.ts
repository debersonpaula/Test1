import { Component } from '@angular/core';
import { TSessionComponent } from '../../lib/session.component';

@Component({
  selector: 'app-notes',
  templateUrl: './page.html'
})
export class NotesEditor extends TSessionComponent {}

@Component({
  selector: 'app-notes',
  templateUrl: './page.html'
})
export class NotesList extends TSessionComponent {}
