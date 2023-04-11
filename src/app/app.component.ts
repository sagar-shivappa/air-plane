import { Component } from '@angular/core';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'airplane-app';
  actionType: any = '';
  constructor(private sharedService: SharedService) {}

  updateType(actionType: any) {
    this.actionType = actionType;
    this.sharedService.actionInfo(actionType);
  }
}
