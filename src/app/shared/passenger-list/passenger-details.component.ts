import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { Store } from '@ngrx/store';
import { flightNumber } from '../state/passenger.action';
import { passengerState } from '../state/passenger.state';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.scss'],
})
export class PassengerDetailsComponent implements OnInit {
  passengersList: any = [];
  flightNo: any;
  actionType: any;
  p = 1;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private router: Router,
    private sharedService: SharedService,
    public actRoute: ActivatedRoute,
    private store: Store<{
      passenger: passengerState;
    }>
  ) {}

  ngOnInit(): void {
    this.listPassengers();
  }
  AfterViewInit() {
    this.passengersList.paginator = this.paginator;
  }
  listPassengers() {
    this.store.select('passenger').subscribe((res: any) => {
      this.sharedService.flightInfo.subscribe((data: any) => {
        this.flightNo = data.flightNo;
      });
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
    this.router.navigate(['passenger/', id, seatno, this.flightNo]);
  }
}
