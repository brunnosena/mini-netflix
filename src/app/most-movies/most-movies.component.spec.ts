import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostMoviesComponent } from './most-movies.component';

describe('MostMoviesComponent', () => {
  let component: MostMoviesComponent;
  let fixture: ComponentFixture<MostMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
