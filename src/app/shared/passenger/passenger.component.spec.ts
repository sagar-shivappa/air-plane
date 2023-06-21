import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { PassengerComponent } from './passenger.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

describe('PassengerComponent', () => {
  let component: PassengerComponent;
  let fixture: ComponentFixture<PassengerComponent>;
  let initialState = {};
  let router: Router;
  let navigateSpy: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PassengerComponent],
      providers: [
        RouterTestingModule,
        Store,
        provideMockStore({ initialState }),
        FormBuilder,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    navigateSpy = spyOn(router, 'navigate');
    component.selectedFlightPassengers = component.passengerList = [
      {
        passengerId: 1,
        passengerName: 'Sagar',
        flightNumber: 'b1345',
        seatNumber: '1',
        ancillaryService: 'Food and beverages',
        checkedIn: true,
        wheelChair: true,
        infant: false,
        mealsService: 'Grade1',
        shoppingService: 'Bicnoculars',
        passportNumber: 'MYUEPS589',
        address: 'Ktsasa s uyjash',
        dateOfBirth: '1998-06-20',
      },
      {
        passengerId: 2,
        passengerName: 'Bhoomika',
        flightNumber: 'b1345',
        seatNumber: '15',
        ancillaryService: 'Early boarding benefits',
        mealsService: 'Grade1',
        shoppingService: 'Wiskey',
        checkedIn: true,
        wheelChair: false,
        infant: false,
        passportNumber: 'GfdfYUEPS589',
        address: 'Ktsasa s uyjash',
        dateOfBirth: '1998-06-20',
      },
      {
        passengerId: 4,
        passengerName: 'Mahesh',
        flightNumber: 'b1345',
        seatNumber: '10',
        ancillaryService: 'Food and beverages',
        shoppingService: 'Wiskey',
        mealsService: 'Grade2',
        checkedIn: false,
        wheelChair: false,
        infant: false,
        passportNumber: '',
        address: 'Ktsasa s uyjash',
        dateOfBirth: '1998-06-20',
      },
      {
        passengerId: 7,
        passengerName: 'Jenki',
        flightNumber: 'b1345',
        seatNumber: '19',
        ancillaryService: 'Early boarding benefits',
        mealsService: 'Grade3',
        shoppingService: 'Bicnoculars',
        checkedIn: true,
        wheelChair: false,
        infant: false,
        passportNumber: '',
        address: 'Ktsasa s uyjash',
        dateOfBirth: '1998-06-20',
      },
    ];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to Check In', () => {
    component.actionType = 'checkIn';
    component.activateRouter();
    expect(navigateSpy).toHaveBeenCalledWith(['/checkin']);
  });

  it('should navigate to admin', () => {
    component.actionType = 'admin';
    component.activateRouter();
    expect(navigateSpy).toHaveBeenCalledWith(['admin/']);
  });

  it('should navigate to blacnk', () => {
    component.actionType = '';
    component.activateRouter();
    expect(navigateSpy).toHaveBeenCalledWith(['/']);
  });

  it('should pick the existing passenger details', () => {
    component.passenger = {
      passengerId: 7,
      passengerName: 'Jenki',
      flightNumber: 'b1345',
      seatNumber: 19,
      ancillaryService: 'Early boarding benefits',
      mealsService: 'Grade3',
      shoppingService: 'Bicnoculars',
      checkedIn: true,
      wheelChair: false,
      infant: false,
      passportNumber: '',
      address: 'Ktsasa s uyjash',
      dateOfBirth: '1998-06-20',
    };
    component.fetchPassengerDetails();
    expect(component.passengerType).toEqual('update');
  });

  it('should create the new passenger details', () => {
    component.passenger = {
      passengerId: 9797,
      passengerName: 'Jenki',
      flightNumber: 'b1345',
      seatNumber: 19,
      ancillaryService: 'Early boarding benefits',
      mealsService: 'Grade3',
      shoppingService: 'Bicnoculars',
      checkedIn: true,
      wheelChair: false,
      infant: false,
      passportNumber: '',
      address: 'Ktsasa s uyjash',
      dateOfBirth: '1998-06-20',
    };
    component.fetchPassengerDetails();
    expect(component.passengerType).toEqual('new');
  });
});
