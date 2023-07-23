import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { Store } from '@ngrx/store';
import { FlightsInterface } from '../state/passenger.state';
import { addFlights } from '../state/passenger.action';

@Component({
  selector: 'app-available-flights',
  templateUrl: './available-flights.component.html',
  styleUrls: ['./available-flights.component.scss'],
})
export class AvailableFlightsComponent implements OnInit {
  flightsList: any;
  actionType: any;
  constructor(
    private http: HttpClient,
    private router: Router,
    private sharedService: SharedService,
    private store: Store<{
      flight: FlightsInterface;
    }>
  ) {}

  ngOnInit(): void {
    this.store.select('flight').subscribe((data) => {
      this.flightsList = data;
    });
    this.sharedService.actionTypeService.subscribe((data) => {
      this.actionType = data;
    });
  }
  flightSelected(flightCode: any) {
    this.sharedService.flightInformation({
      flightNo: flightCode,
      passengers: [],
    });
    if (this.actionType == 'admin') {
      this.router.navigate(['/passengerdetails']);
    } else {
      this.router.navigate(['/checkin']);
    }
  }
}
