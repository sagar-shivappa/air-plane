import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatsComponent } from './seats.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('SeatsComponent', () => {
  let component: SeatsComponent;
  let fixture: ComponentFixture<SeatsComponent>;
  let router: Router;
  let navigateSpy: any;
  let seats = {
    flightNo: 'b1345',
    passengers: [
      {
        passengerId: 1,
        passengerName: 'Sagar',
        flightNumber: 'b1345',
        seatNumber: 1,
        ancillaryService: 'medical',
        checkedIn: true,
        wheelChair: true,
        infant: false,
        mealsService: 'Grade1',
        passportNumber: 'MYUEPS589',
        address: 'Ktsasa s uyjash',
        dateOfBirth: '20-06-1998',
      },
      {
        passengerId: 2,
        passengerName: 'Bhoomika',
        flightNumber: 'b1345',
        seatNumber: 15,
        ancillaryService: 'Drinks',
        mealsService: 'Grade1',
        checkedIn: true,
        wheelChair: false,
        infant: false,
        passportNumber: 'GfdfYUEPS589',
        address: 'Ktsasa s uyjash',
        dateOfBirth: '20-06-1998',
      },
      {
        passengerId: 4,
        passengerName: 'Mahesh',
        flightNumber: 'b1345',
        seatNumber: 10,
        ancillaryService: 'Drinks',
        mealsService: 'Grade2',
        checkedIn: false,
        wheelChair: false,
        infant: false,
        passportNumber: '',
        address: 'Ktsasa s uyjash',
        dateOfBirth: '20-06-1998',
      },
      {
        passengerId: 7,
        passengerName: 'Jenki',
        flightNumber: 'b1345',
        seatNumber: 19,
        ancillaryService: 'Biscuts',
        mealsService: 'Grade3',
        checkedIn: true,
        wheelChair: false,
        infant: false,
        passportNumber: '',
        address: 'Ktsasa s uyjash',
        dateOfBirth: '20-06-1998',
      },
    ],
  };
  let mappedSeats = {
    flightNo: 'b1345',
    passengers: [
      {
        passengerId: 1,
        passengerName: 'Sagar',
        flightNumber: 'b1345',
        seatNumber: 1,
        ancillaryService: 'medical',
        checkedIn: true,
        wheelChair: true,
        infant: false,
        mealsService: 'Grade1',
        passportNumber: 'MYUEPS589',
        address: 'Ktsasa s uyjash',
        dateOfBirth: '20-06-1998',
      },
      {
        passengerId: 0,
        passengerName: 'N/A',
        flightNumber: '',
        seatNumber: 2,
        ancillaryService: 'N/A',
        checkedIn: false,
      },
      {
        passengerId: 0,
        passengerName: 'N/A',
        flightNumber: '',
        seatNumber: 3,
        ancillaryService: 'N/A',
        checkedIn: false,
      },
      {
        passengerId: 0,
        passengerName: 'N/A',
        flightNumber: '',
        seatNumber: 4,
        ancillaryService: 'N/A',
        checkedIn: false,
      },
      {
        passengerId: 0,
        passengerName: 'N/A',
        flightNumber: '',
        seatNumber: 5,
        ancillaryService: 'N/A',
        checkedIn: false,
      },
      {
        passengerId: 0,
        passengerName: 'N/A',
        flightNumber: '',
        seatNumber: 6,
        ancillaryService: 'N/A',
        checkedIn: false,
      },
      {
        passengerId: 0,
        passengerName: 'N/A',
        flightNumber: '',
        seatNumber: 7,
        ancillaryService: 'N/A',
        checkedIn: false,
      },
      {
        passengerId: 0,
        passengerName: 'N/A',
        flightNumber: '',
        seatNumber: 8,
        ancillaryService: 'N/A',
        checkedIn: false,
      },
      {
        passengerId: 0,
        passengerName: 'N/A',
        flightNumber: '',
        seatNumber: 9,
        ancillaryService: 'N/A',
        checkedIn: false,
      },
      {
        passengerId: 4,
        passengerName: 'Mahesh',
        flightNumber: 'b1345',
        seatNumber: 10,
        ancillaryService: 'Drinks',
        mealsService: 'Grade2',
        checkedIn: false,
        wheelChair: false,
        infant: false,
        passportNumber: '',
        address: 'Ktsasa s uyjash',
        dateOfBirth: '20-06-1998',
      },
      {
        passengerId: 0,
        passengerName: 'N/A',
        flightNumber: '',
        seatNumber: 11,
        ancillaryService: 'N/A',
        checkedIn: false,
      },
      {
        passengerId: 0,
        passengerName: 'N/A',
        flightNumber: '',
        seatNumber: 12,
        ancillaryService: 'N/A',
        checkedIn: false,
      },
      {
        passengerId: 0,
        passengerName: 'N/A',
        flightNumber: '',
        seatNumber: 13,
        ancillaryService: 'N/A',
        checkedIn: false,
      },
      {
        passengerId: 0,
        passengerName: 'N/A',
        flightNumber: '',
        seatNumber: 14,
        ancillaryService: 'N/A',
        checkedIn: false,
      },
      {
        passengerId: 2,
        passengerName: 'Bhoomika',
        flightNumber: 'b1345',
        seatNumber: 15,
        ancillaryService: 'Drinks',
        mealsService: 'Grade1',
        checkedIn: true,
        wheelChair: false,
        infant: false,
        passportNumber: 'GfdfYUEPS589',
        address: 'Ktsasa s uyjash',
        dateOfBirth: '20-06-1998',
      },
      {
        passengerId: 0,
        passengerName: 'N/A',
        flightNumber: '',
        seatNumber: 16,
        ancillaryService: 'N/A',
        checkedIn: false,
      },
      {
        passengerId: 0,
        passengerName: 'N/A',
        flightNumber: '',
        seatNumber: 17,
        ancillaryService: 'N/A',
        checkedIn: false,
      },
      {
        passengerId: 0,
        passengerName: 'N/A',
        flightNumber: '',
        seatNumber: 18,
        ancillaryService: 'N/A',
        checkedIn: false,
      },
      {
        passengerId: 7,
        passengerName: 'Jenki',
        flightNumber: 'b1345',
        seatNumber: 19,
        ancillaryService: 'Biscuts',
        mealsService: 'Grade3',
        checkedIn: true,
        wheelChair: false,
        infant: false,
        passportNumber: '',
        address: 'Ktsasa s uyjash',
        dateOfBirth: '20-06-1998',
      },
      {
        passengerId: 0,
        passengerName: 'N/A',
        flightNumber: '',
        seatNumber: 20,
        ancillaryService: 'N/A',
        checkedIn: false,
      },
    ],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeatsComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    navigateSpy = spyOn(router, 'navigate');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should map the seats', () => {
    component.mapSeats(seats);
    expect(component.seatAllocations.passengers).toEqual(
      mappedSeats.passengers
    );
  });

  it('should update the seat and route', () => {
    component.updateSeat(1, 1);
    expect(navigateSpy).toHaveBeenCalledWith([
      'passenger/',
      1,
      1,
      component.seatAllocations.flightNo,
    ]);
  });
});
