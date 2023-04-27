import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared/shared.service';
import { Router } from '@angular/router';

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
  }
}
