import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-airline-staff-home',
  templateUrl: './airline-staff-home.component.html',
  styleUrls: ['./airline-staff-home.component.scss'],
})
export class AirlineStaffHomeComponent implements OnInit {
  airlineOptions: any = [
    {
      name: 'Check In',
      actionType: 'flight-checkIn',
      imgPath:
        'https://i.pinimg.com/originals/a7/c2/a2/a7c2a20c39c1305312fbfff428db7aff.jpg',
    },
    {
      name: 'In Flight',
      actionType: 'inflight',
      imgPath:
        'https://cdn.businesstraveller.com/wp-content/uploads/2020/03/Vietnam-Airlines-In-flight-service-on-South-Korean-routes-over-coronavirus-outbreak.jpg',
    },
  ];
  constructor(private sharedService: SharedService, private router: Router) {}

  ngOnInit(): void {}
  selectedOption(actionType: any) {
    this.sharedService.updateCheckInType(actionType);
    this.router.navigate(['flights']);
  }
}
