import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveSitRightComponent } from './reserve-sit-right.component';

describe('ReserveSitRightComponent', () => {
  let component: ReserveSitRightComponent;
  let fixture: ComponentFixture<ReserveSitRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveSitRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveSitRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
