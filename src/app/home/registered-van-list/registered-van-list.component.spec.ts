import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredVanListComponent } from './registered-van-list.component';

describe('RegisteredVanListComponent', () => {
  let component: RegisteredVanListComponent;
  let fixture: ComponentFixture<RegisteredVanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteredVanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredVanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
