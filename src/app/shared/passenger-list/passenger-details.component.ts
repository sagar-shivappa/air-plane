import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../shared.service';

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
    private http: HttpClient,
    private router: Router,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.sharedService.flightInfo.subscribe((data: any) => {
      this.flightNo = data.flightNo;
      this.passengersList = data.passengers;
      console.log(data);
    });
  }
  searchFlight() {
    this.http.get('assets/mock/passengers.json').subscribe((res: any) => {
      this.passengersList = res.filter(
        (i: any) => i.flightNumber === this.flightNo
      );
      this.sharedService.flightInformation({
        flightNo: this.flightNo,
        passengers: this.passengersList,
      });
    });
  }

  updatePassenger(id: any, seatno: any) {
    this.router.navigate(['passengerdetails/', id, seatno, this.flightNo]);
  }
}
