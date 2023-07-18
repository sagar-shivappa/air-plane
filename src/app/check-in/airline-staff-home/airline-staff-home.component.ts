import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-airline-staff-home',
  templateUrl: './airline-staff-home.component.html',
  styleUrls: ['./airline-staff-home.component.scss'],
})
export class AirlineStaffHomeComponent {
  airlineOptions: any = [
    {
      name: 'Check In',
      actionType: 'flight-checkIn',
      imgPath: '/assets/img/checkIn.jpg',
    },
    {
      name: 'In Flight',
      actionType: 'inflight',
      imgPath: '/assets/img/inflight.jpg',
    },
  ];
  constructor(private sharedService: SharedService, private router: Router) {}

  selectedOption(actionType: any) {
    this.sharedService.updateCheckInType(actionType);
    this.router.navigate(['flights']);
  }
}
