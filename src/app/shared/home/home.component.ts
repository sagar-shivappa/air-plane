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
      imgPath:
        'https://m5.paperblog.com/i/168/1685218/tricks-recommended-by-airline-staff-L-7GnuH1.jpeg',
    },
    {
      name: 'ADMIN',
      actionType: 'admin',
      imgPath:
        'https://www.englishclub.com/images/english-for-work/airline.png',
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
