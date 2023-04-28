import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlineStaffHomeComponent } from './airline-staff-home.component';

describe('AirlineStaffHomeComponent', () => {
  let component: AirlineStaffHomeComponent;
  let fixture: ComponentFixture<AirlineStaffHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirlineStaffHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlineStaffHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
