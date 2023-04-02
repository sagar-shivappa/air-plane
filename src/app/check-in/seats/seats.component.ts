import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.scss'],
})
export class SeatsComponent implements OnInit {
  public seatAllocations: any = [];
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.flightInfo.subscribe((data: any) => {
      this.seatAllocations = data;
      var seats = [];
      // this.seatAllocations.map(() => {
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
            flightNumber: 'b1345',
            seatNumber: i,
            ancillaryService: 'N/A',
            checkedIn: false,
          });
        }
      }
      // });
      this.seatAllocations.passengers = seats;
      console.log(data, seats);
    });
  }
}
