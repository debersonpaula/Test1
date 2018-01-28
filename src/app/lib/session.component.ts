import { Component, OnInit } from '@angular/core';
import { SessionsService } from '../services/sessions.service';

@Component({
    selector: 'app-session',
    template: ''
})
export class TSessionComponent implements OnInit {
    /** session content */
    session: any;
    /** constructor */
    constructor(private sessions: SessionsService) {
    }
    /** initialize session variable */
    ngOnInit() {
        // update session for every changes in sessions
        this.sessions.session.subscribe( data => this.session = data);
        // executes OnRun
        this.OnRun();
    }
    /** execute after OnInit */
    OnRun() {}

    /** start sessions check */
    doCheck(): void {
        this.sessions.startSession();
    }

    /** Execute Logout action */
    doLogout(): void {
        this.sessions.stopSession();
    }
}