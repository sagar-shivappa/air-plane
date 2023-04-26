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
  }
  flightSelected(flightCode: any) {
    this.sharedService.flightInformation({
      flightNo: flightCode,
    });
    this.router.navigate(['/passengerdetails', flightCode]);
  }
}
