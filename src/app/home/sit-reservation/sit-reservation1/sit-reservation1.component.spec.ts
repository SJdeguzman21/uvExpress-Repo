import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitReservation1Component } from './sit-reservation1.component';

describe('SitReservation1Component', () => {
  let component: SitReservation1Component;
  let fixture: ComponentFixture<SitReservation1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitReservation1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitReservation1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
