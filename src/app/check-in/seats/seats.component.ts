import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.scss'],
})
export class SeatsComponent implements OnInit {
  public seatAllocations: any;
  checkInType: any;
  constructor(private sharedService: SharedService, private router: Router) {}

  ngOnInit(): void {
    this.sharedService.$checkInType.subscribe((type: any) => {
      this.checkInType = type;
    });
    this.sharedService.flightInfo.subscribe((data: any) => {
      this.seatAllocations = data;
      this.mapSeats(data);
    });
  }

  mapSeats(data: any) {
    var seats = [];
    for (let i = 1; i <= 20; i++) {
      const a = data.passengers.find(
        (item: { seatNumber: number }) => item.seatNumber == i
      );
      if (a) {
        seats.push(a);
      } else {
        seats.push({
          passengerId: 0,
          passengerName: 'N/A',
          flightNumber: '',
          seatNumber: i,
          ancillaryService: 'N/A',
          checkedIn: false,
        });
      }
    }
    this.seatAllocations.passengers = seats;
  }
  updateSeat(id: any, seatno: any) {
    this.router.navigate([
      'passenger/',
      id,
      seatno,
      this.seatAllocations.flightNo,
    ]);
  }
}
