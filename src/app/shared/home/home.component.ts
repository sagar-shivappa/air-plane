import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  homeOptions: any = [
    {
      name: 'AirLine Staff',
      actionType: 'checkIn',
      imgPath: '/assets/img/airlineStaff.jpeg',
    },
    {
      name: 'ADMIN',
      actionType: 'admin',
      imgPath: '/assets/img/admin.png',
    },
  ];
  constructor(private sharedService: SharedService, private router: Router) {}

  selectedOption(actionType: any) {
    this.sharedService.actionInfo(actionType);
    actionType == 'checkIn'
      ? this.router.navigate(['checkin/home'])
      : this.router.navigate(['flights']);
  }
}
