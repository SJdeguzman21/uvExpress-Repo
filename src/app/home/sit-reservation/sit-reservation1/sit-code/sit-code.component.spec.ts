import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitCodeComponent } from './sit-code.component';

describe('SitCodeComponent', () => {
  let component: SitCodeComponent;
  let fixture: ComponentFixture<SitCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
