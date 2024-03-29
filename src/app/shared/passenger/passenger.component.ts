import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';
import { Store } from '@ngrx/store';
import {
  FlightsInterface,
  passengerState,
  passengerinterface,
} from '../state/passenger.state';
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

  passenger = {
    passengerId: 1,
    passengerName: '',
    flightNumber: '',
    seatNumber: 0,
    ancillaryService: [],
    mealsService: '',
    shoppingService: '',
    checkedIn: false,
    wheelChair: false,
    infant: false,
    passportNumber: '',
    address: '',
    dateOfBirth: '',
  };
  errorMessage: any = '';
  successMessage: any = '';
  passengersSubscription: Subscription | undefined;
  pasgForm: FormGroup;
  providedAncillaryService: any;
  providedShoppingService: any;

  constructor(
    private router: Router,
    public actRoute: ActivatedRoute,
    private sharedService: SharedService,
    private store: Store<{
      passenger: passengerState;
      flight: FlightsInterface;
    }>,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.pasgForm = this.fb.group({
      passengerId: [1],
      passengerName: ['', Validators.required],
      flightNumber: [''],
      seatNumber: [0, Validators.required],
      ancillaryService: [''],
      mealsService: [''],
      shoppingService: [''],
      checkedIn: [false],
      wheelChair: [false],
      infant: [false],
      passportNumber: [''],
      address: [''],
      dateOfBirth: [''],
    });

    this.actRoute.params.subscribe((data) => {
      //Got the selected flight Info-1
      this.passenger.passengerId = JSON.parse(data['id']);
      this.passenger.seatNumber = this.seatNumber = data['seatno'];
      this.passenger.flightNumber = data['flightNo'];

      this.passengersSubscription = this.store
        .select('passenger')
        .subscribe((res: any) => {
          this.passengerList = res.passengers;
          this.fetchPassengerDetails();
        });
    });
    // To notice the CheckIn and Admin tabs
    this.sharedService.actionTypeService.subscribe((data: any) => {
      this.actionType = data;
    });

    //The below is to get the flight details from the store
    this.store.select('flight').subscribe((res: any) => {
      let response: any = res.filter(
        (data: FlightsInterface) =>
          data.flightCode == this.passenger.flightNumber
      );

      this.providedAncillaryService = response[0].provisionedAncillaryServices;
      this.providedShoppingService = response[0].provisionedShoppingItems;
    });
    this.pickAvailableSeats();
  }

  fetchPassengerDetails() {
    const exsistingPassenger = this.passengerList.find(
      (i: any) => i.passengerId == this.passenger.passengerId
    );
    this.selectedFlightPassengers = this.passengerList.filter(
      (ele: any) => ele.flightNumber == this.passenger.flightNumber
    );
    if (!exsistingPassenger) {
      this.passengerType = 'new';
      this.pasgForm.controls['passengerId'].setValue(
        Math.floor(Math.random() * 1000)
      );

      this.pasgForm.setValue(JSON.parse(JSON.stringify(this.passenger)));
    } else {
      this.passengerType = 'update';
      this.pasgForm.setValue(JSON.parse(JSON.stringify(exsistingPassenger)));
    }
  }
  removeAllocation() {
    let a = this.passengerList.findIndex(
      (x: { passengerId: string }) =>
        JSON.parse(x.passengerId) ===
        this.pasgForm.controls['passengerId'].value
    );
    let b = JSON.parse(JSON.stringify(this.passengerList));
    b.splice(a, 1);
    this.errorMessage = `${this.pasgForm.controls['passengerName'].value} is removed from the journey`;
    setTimeout(() => {
      this.store.dispatch(updatePassenger({ updatedPassenger: b }));
      this.actionType == 'checkIn'
        ? this.router.navigate(['checkin'])
        : this.router.navigate(['admin/']);
    }, 1500);
  }
  updatePassenger() {
    if (this.pasgForm.valid) {
      if (this.passengerType == 'new') {
        this.pasgForm.controls['passengerId'].setValue(
          Math.floor(Math.random() * 1000)
        );
        this.store.dispatch(addPassenger({ passenger: this.pasgForm.value }));
        this.errorMessage = '';
        this.successMessage = 'Passenger is successfully Added';
        setTimeout(() => {
          this.activateRouter();
        }, 1500);
      } else {
        let updatedPassengersList = this.passengerList.map(
          (i: passengerinterface) => {
            if (i.passengerId == this.pasgForm.controls['passengerId'].value) {
              i = this.pasgForm.value;
              return i;
            } else {
              return i;
            }
          }
        );

        this.store.dispatch(
          updatePassenger({ updatedPassenger: updatedPassengersList })
        );
        this.errorMessage = '';
        this.successMessage = 'Passenger is successfully Updated';
        window.scrollTo(0, 0);
        setTimeout(() => {
          this.activateRouter();
        }, 1500);
      }
    } else {
      window.scrollTo(0, 0);
      this.errorMessage = 'Fill out all the mandatory fields *';
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
      let data1 = this.selectedFlightPassengers?.find(
        (ele: any) => JSON.parse(ele.seatNumber) === i
      );
      var option = document.createElement('option');
      option.setAttribute('value', JSON.stringify(i));

      let optionText = document.createTextNode(`Seat Number ${i}`);
      option.appendChild(optionText);
      if (!data1) {
        seatNumbers?.appendChild(option);
      } else {
        this.pasgForm.controls['seatNumber'].value == JSON.stringify(i)
          ? seatNumbers?.appendChild(option)
          : '';
      }
    }
  }

  pickAncillaryAndShoppingServices() {
    const seatNumbers = document.getElementById('ancillaryService');
  }
}
