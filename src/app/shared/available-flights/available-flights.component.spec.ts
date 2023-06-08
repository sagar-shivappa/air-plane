import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableFlightsComponent } from './available-flights.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('AvailableFlightsComponent', () => {
  let component: AvailableFlightsComponent;
  let fixture: ComponentFixture<AvailableFlightsComponent>;
  let router: Router;
  let navigateSpy: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [AvailableFlightsComponent],
      providers: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    navigateSpy = spyOn(router, 'navigate');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should route checkIn ', () => {
    component.actionType = 'checkIn';
    component.flightSelected('test');
    expect(navigateSpy).toHaveBeenCalledWith(['/checkin']);
  });

  it('should route admin ', () => {
    component.actionType = 'admin';
    component.flightSelected('test');
    expect(navigateSpy).toHaveBeenCalledWith(['/passengerdetails']);
  });
});
