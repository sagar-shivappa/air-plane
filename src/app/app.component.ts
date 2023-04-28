import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared/shared.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { passengerState } from './shared/state/passenger.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'airplane-app';
  actionType: any = '';
  constructor(private sharedService: SharedService, private router: Router) {}
  ngOnInit(): void {
    this.router.navigate(['home']);
    this.sharedService.actionTypeService.subscribe((data) => {
      this.actionType = data;
    });
  }
  updateType(actionType: any) {
    this.actionType = actionType;
    this.sharedService.actionInfo(actionType);
    actionType == 'checkIn'
      ? this.router.navigate(['checkin/home'])
      : this.router.navigate(['flights']);
  }
}
