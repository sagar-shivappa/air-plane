import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerDetailsComponent } from './passenger-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { Router } from '@angular/router';

describe('PassengerDetailsComponent', () => {
  let component: PassengerDetailsComponent;
  let fixture: ComponentFixture<PassengerDetailsComponent>;
  let initialState = {};
  let router: Router;
  let navigateSpy: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PassengerDetailsComponent],
      imports: [RouterTestingModule],
      providers: [Store, provideMockStore({ initialState })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    navigateSpy = spyOn(router, 'navigate');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the seat and route', () => {
    component.flightNo = 'test';
    component.updatePassenger(1, 1);
    expect(navigateSpy).toHaveBeenCalledWith(['passenger/', 1, 1, 'test']);
  });
});
