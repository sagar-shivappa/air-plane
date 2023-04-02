import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.scss'],
})
export class PassengerComponent implements OnInit {
  passengerId: any;
  passengerList: any;
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
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.actRoute.params.subscribe((data) => {
      this.passengerId = data['id'];
      this.http.get('assets/mock/passengers.json').subscribe((res: any) => {
        this.passengerList = res;
        this.passengerForm = res.find(
          (i: any) => i.passengerId == this.passengerId
        );
      });
    });
  }

  updatePassenger() {
    this.passengerList.indexOf(this.appointmentForm);
    console.log(
      this.passengerForm,
      this.passengerList.indexOf(this.appointmentForm)
    );
    this.router.navigate(['admin']);
  }
}
