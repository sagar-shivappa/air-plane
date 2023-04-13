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
  passengerForm = {
    passengerId: 1,
    passengerName: '',
    flightNumber: '',
    seatNumber: 0,
    ancillaryService: '',
    checkedIn: false,
    id: 0,
  };
  passenger = {
    passengerId: 1,
    passengerName: '',
    flightNumber: '',
    seatNumber: 0,
    ancillaryService: '',
    checkedIn: false,
    id: null,
  };
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
  }
  removeAllocation() {
    let a = this.passengerList.findIndex(
      (x: { passengerId: string }) =>
        JSON.parse(x.passengerId) === this.passengerForm.passengerId
    );
    let b = JSON.parse(JSON.stringify(this.passengerList));
    b.splice(a, 1);

    this.store.dispatch(updatePassenger({ updatedPassenger: b }));
    this.actionType == 'checkIn'
      ? this.router.navigate(['checkin/home'])
      : this.router.navigate(['admin/']);
  }
  updatePassenger() {
    if (this.actionType == 'checkIn') {
      this.router.navigate(['checkin/home']);
    } else if (this.actionType == 'admin') {
      this.router.navigate(['admin/']);
    } else {
      this.router.navigate(['/']);
    }
    if (this.passengerType == 'new') {
      this.passengerForm.passengerId = Math.floor(Math.random() * 1000);
      this.store.dispatch(addPassenger({ passenger: this.passengerForm }));
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
    }
  }
  ngOnDestroy(): void {
    if (this.passengersSubscription) {
      this.passengersSubscription.unsubscribe();
    }
  }
}
