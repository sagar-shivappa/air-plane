import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { Store } from '@ngrx/store';
import { flightNumber } from '../state/passenger.action';
import { passengerState } from '../state/passenger.state';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.scss'],
})
export class PassengerDetailsComponent implements OnInit {
  passengersList: any = [];
  flightNo: any;
  actionType: any;
  constructor(
    private router: Router,
    private sharedService: SharedService,
    private store: Store<{
      passenger: passengerState;
    }>
  ) {}

  ngOnInit(): void {
    this.sharedService.flightInfo.subscribe((data: any) => {
      this.flightNo = data.flightNo;
      this.passengersList = data.passengers;
      console.log(data);
    });
    this.store.select('passenger').subscribe((data) => {
      console.log('pd', data);
    });
  }
  searchFlight() {
    this.store.select('passenger').subscribe((res: any) => {
      this.passengersList = res.passengers.filter(
        (i: any) => i.flightNumber === this.flightNo
      );
      this.sharedService.flightInformation({
        flightNo: this.flightNo,
        passengers: this.passengersList,
      });
    });
    this.store.dispatch(flightNumber());
  }

  updatePassenger(id: any, seatno: any) {
    this.router.navigate(['passengerdetails/', id, seatno, this.flightNo]);
  }
}
