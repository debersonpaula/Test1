import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterModule, ChildrenOutletContexts } from '@angular/router';
import { MainService } from './services/main.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterModule
      ],
      providers: [
        HttpClient,
        HttpHandler,
        ChildrenOutletContexts,
        MainService
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'TNEMA + Angular 5'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('TNEMA + Angular 5');
  }));
});
