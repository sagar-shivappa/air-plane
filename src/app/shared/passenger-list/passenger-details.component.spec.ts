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
  let passengerListMockData = [
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
    component.tempPassengersList = passengerListMockData;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the seat and route', () => {
    component.flightNo = 'test';
    component.updatePassenger(1, 1);
    expect(navigateSpy).toHaveBeenCalledWith(['passenger/', 1, 1, 'test']);
  });

  it('should apply filter based on check In', () => {
    component.filterBy = 'checkIn';
    component.applyfilter();
    expect(component.passengersList).toEqual([
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
    ]);
  });

  it('should apply filter based Not check In', () => {
    component.filterBy = 'notCheckIn';
    component.applyfilter();
    expect(component.passengersList).toEqual([
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
    ]);
  });

  it('should apply filter based Infant', () => {
    component.filterBy = 'infant';
    component.applyfilter();
    expect(component.passengersList).toEqual([]);
  });

  it('should apply filter based Not check In', () => {
    component.filterBy = 'wheelChair';
    component.applyfilter();
    expect(component.passengersList).toEqual([
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
    ]);
  });

  it('should apply filter based on missing Passport', () => {
    component.filterBy = 'missPass';
    component.applyfilter();
    expect(component.passengersList).toEqual([
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
    ]);
  });

  it('should apply filter based on missing Address', () => {
    component.filterBy = 'missAdd';
    component.applyfilter();
    expect(component.passengersList).toEqual([]);
  });

  it('should apply filter based on missing DOB', () => {
    component.filterBy = 'missDob';
    component.applyfilter();
    expect(component.passengersList).toEqual([]);
  });
});
