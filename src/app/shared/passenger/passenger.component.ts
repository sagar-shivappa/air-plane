import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.scss'],
})
export class PassengerComponent implements OnInit {
  passengerId: any;
  passengerList: any;
  seatNumber: any;
  actionType: any;
  passengerForm = {
    passengerName: '',
    flightNumber: '',
    seatNumber: '',
    ancillaryService: '',
  };
  appointmentForm = this.fb.group({
    id_t: ['test'],
  });
  constructor(
    private http: HttpClient,
    private router: Router,
    public actRoute: ActivatedRoute,
    private fb: FormBuilder,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.actRoute.params.subscribe((data) => {
      this.passengerId = data['id'];
      this.passengerForm.seatNumber = this.seatNumber = data['seatno'];
      this.passengerForm.flightNumber = this.seatNumber = data['flightNo'];
      this.http.get('assets/mock/passengers.json').subscribe((res: any) => {
        this.passengerList = res;
        this.passengerForm = res.find(
          (i: any) => i.passengerId == this.passengerId
        );
      });
    });

    this.sharedService.actionTypeService.subscribe((data: any) => {
      this.actionType = data;
      console.log(data);
    });
  }

  updatePassenger() {
    this.actionType == 'checkIn'
      ? this.router.navigate(['checkin/home'])
      : this.router.navigate(['admin/']);
  }
}
