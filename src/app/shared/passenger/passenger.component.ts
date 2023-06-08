import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { SharedService } from '../shared.service';
import { Store } from '@ngrx/store';
import { passengerState, passengerinterface } from '../state/passenger.state';
import { Subscription } from 'rxjs';
import { addPassenger, updatePassenger } from '../state/passenger.action';
@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.scss'],
})
export class PassengerComponent implements OnInit, OnDestroy {
  passengerId: any;
  passengerList: any;
  seatNumber: any;
  actionType: any;
  passengerType: any;
  selectedFlightPassengers: any;
  passengerForm = {
    passengerId: 1,
    passengerName: '',
    flightNumber: '',
    seatNumber: 0,
    ancillaryService: '',
    mealsService: '',
    shoppingService: '',
    checkedIn: false,
    id: 0,
    wheelChair: false,
    infant: false,
    passportNumber: '',
    address: '',
    dateOfBirth: '',
  };
  passenger = {
    passengerId: 1,
    passengerName: '',
    flightNumber: '',
    seatNumber: 0,
    ancillaryService: '',
    mealsService: '',
    shoppingService: '',
    checkedIn: false,
    id: null,
    wheelChair: false,
    infant: false,
    passportNumber: '',
    address: '',
    dateOfBirth: '',
  };
  errorMessage: any = '';
  successMessage: any = '';
  passengersSubscription: Subscription | undefined;

  constructor(
    private router: Router,
    public actRoute: ActivatedRoute,
    private sharedService: SharedService,
    private store: Store<{
      passenger: passengerState;
    }>
  ) {}

  ngOnInit(): void {
    this.actRoute.params.subscribe((data) => {
      this.passenger.passengerId = JSON.parse(data['id']);
      this.passenger.seatNumber = this.seatNumber = data['seatno'];
      this.passenger.flightNumber = data['flightNo'];

      this.passengersSubscription = this.store
        .select('passenger')
        .subscribe((res: any) => {
          this.passengerList = res.passengers;
          const exsistingPassenger = res.passengers.find(
            (i: any) => i.passengerId == this.passenger.passengerId
          );
          this.selectedFlightPassengers = this.passengerList.filter(
            (ele: any) => ele.flightNumber == this.passenger.flightNumber
          );
          if (!exsistingPassenger) {
            this.passengerType = 'new';
            this.passengerForm.passengerId = Math.floor(Math.random() * 1000);
            this.passengerForm = JSON.parse(JSON.stringify(this.passenger));
          } else {
            this.passengerType = 'update';
            this.passengerForm = JSON.parse(JSON.stringify(exsistingPassenger));
          }
        });
    });
    // To notice the CheckIn and Admin tabs
    this.sharedService.actionTypeService.subscribe((data: any) => {
      this.actionType = data;
      console.log(data);
    });
    this.pickAvailableSeats();
  }
  removeAllocation() {
    let a = this.passengerList.findIndex(
      (x: { passengerId: string }) =>
        JSON.parse(x.passengerId) === this.passengerForm.passengerId
    );
    let b = JSON.parse(JSON.stringify(this.passengerList));
    b.splice(a, 1);
    this.errorMessage = `${this.passengerForm.passengerName} is removed from the journey`;
    setTimeout(() => {
      this.store.dispatch(updatePassenger({ updatedPassenger: b }));
      this.actionType == 'checkIn'
        ? this.router.navigate(['checkin'])
        : this.router.navigate(['admin/']);
    }, 1500);
  }
  updatePassenger() {
    if (this.passengerType == 'new') {
      this.passengerForm.passengerId = Math.floor(Math.random() * 1000);

      this.store.dispatch(addPassenger({ passenger: this.passengerForm }));
      this.successMessage = 'Passenger is successfully Added';
      setTimeout(() => {
        this.activateRouter();
      }, 1500);
    } else {
      let updatedPassengersList = this.passengerList.map(
        (i: passengerinterface) => {
          if (i.passengerId == this.passengerForm.passengerId) {
            i = this.passengerForm;
            return i;
          } else {
            return i;
          }
        }
      );

      this.store.dispatch(
        updatePassenger({ updatedPassenger: updatedPassengersList })
      );
      this.successMessage = 'Passenger is successfully Updated';
      setTimeout(() => {
        this.activateRouter();
      }, 1500);
    }
  }
  ngOnDestroy(): void {
    if (this.passengersSubscription) {
      this.passengersSubscription.unsubscribe();
    }
  }

  activateRouter() {
    if (this.actionType == 'checkIn') {
      this.router.navigate(['/checkin']);
    } else if (this.actionType == 'admin') {
      this.router.navigate(['admin/']);
    } else {
      this.router.navigate(['/']);
    }
    this.errorMessage = '';
    this.successMessage = '';
  }

  pickAvailableSeats() {
    const seatNumbers = document.getElementById('seatNumber');

    for (let i = 1; i <= 20; i++) {
      let data1 = this.selectedFlightPassengers.find(
        (ele: any) => ele.seatNumber === i
      );
      if (!data1) {
        var option = document.createElement('option');
        option.setAttribute('value', JSON.stringify(i));

        let optionText = document.createTextNode(`Seat Number ${i}`);
        option.appendChild(optionText);

        seatNumbers?.appendChild(option);
      }
    }
  }
}
