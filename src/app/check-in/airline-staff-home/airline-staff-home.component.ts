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
    { name: 'Check In', actionType: 'flight-checkIn' },
    { name: 'In Flight', actionType: 'inflight' },
  ];
  constructor(private sharedService: SharedService, private router: Router) {}

  ngOnInit(): void {}
  selectedOption(actionType: any) {
    this.sharedService.updateCheckInType(actionType);
    this.router.navigate(['flights']);
  }
}
