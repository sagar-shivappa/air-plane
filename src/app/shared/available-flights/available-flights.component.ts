import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

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
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.http.get('http://localhost:8080/flight-list').subscribe((data) => {
      this.flightsList = data;
      console.log(this.flightsList);
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
