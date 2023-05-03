import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private flightDetails = new BehaviorSubject({});
  flightInfo = this.flightDetails.asObservable();
  private actionType = new BehaviorSubject('');
  actionTypeService = this.actionType.asObservable();
  private checkInType = new BehaviorSubject('');
  $checkInType = this.checkInType.asObservable();

  constructor() {}

  flightInformation(flightInfo: any) {
    this.flightDetails.next(flightInfo);
  }

  actionInfo(actionType: any) {
    this.actionType.next(actionType);
  }

  updateCheckInType(type: any) {
    this.checkInType.next(type);
  }
}
