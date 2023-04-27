import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  homeOptions: any = [
    { name: 'AirLine Staff', actionType: 'checkIn' },
    { name: 'ADMIN', actionType: 'admin' },
  ];
  constructor(private sharedService: SharedService, private router: Router) {}

  ngOnInit(): void {}

  selectedOption(actionType: any) {
    this.sharedService.actionInfo(actionType);
    this.router.navigate(['flights']);
  }
}
