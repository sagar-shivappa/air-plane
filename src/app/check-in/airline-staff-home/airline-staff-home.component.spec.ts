import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlineStaffHomeComponent } from './airline-staff-home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('AirlineStaffHomeComponent', () => {
  let component: AirlineStaffHomeComponent;
  let fixture: ComponentFixture<AirlineStaffHomeComponent>;
  let router: Router;
  let navigateSpy: any;

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
    router = TestBed.get(Router);
    navigateSpy = spyOn(router, 'navigate');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the available flights', () => {
    component.selectedOption('admin');
    expect(navigateSpy).toHaveBeenCalledWith(['flights']);
  });
});
