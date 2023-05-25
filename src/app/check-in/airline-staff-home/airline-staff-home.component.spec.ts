import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlineStaffHomeComponent } from './airline-staff-home.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AirlineStaffHomeComponent', () => {
  let component: AirlineStaffHomeComponent;
  let fixture: ComponentFixture<AirlineStaffHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AirlineStaffHomeComponent],
      providers: [RouterTestingModule],
    }).compileComponents();
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
