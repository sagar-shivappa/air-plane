import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private flightDetails = new BehaviorSubject({});
  flightInfo = this.flightDetails.asObservable();
  constructor() {}

  flightInformation(flightInfo: any) {
    this.flightDetails.next(flightInfo);
  }
}
