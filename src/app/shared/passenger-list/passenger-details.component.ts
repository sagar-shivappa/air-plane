import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { Store } from '@ngrx/store';
import { flightNumber } from '../state/passenger.action';
import { passengerState } from '../state/passenger.state';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { FlightServiceDialogComponent } from '../flight-service-dialog/flight-service-dialog.component';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.scss'],
})
export class PassengerDetailsComponent implements OnInit {
  passengersList: any = [];
  tempPassengersList: any;
  flightNo: any;
  actionType: any;
  filterBy: any;
  p = 1;
  saved: boolean;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private router: Router,
    private sharedService: SharedService,
    public actRoute: ActivatedRoute,
    private store: Store<{
      passenger: passengerState;
    }>,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.sharedService.actionTypeService.subscribe((data: any) => {
      this.actionType = data;
    });
    this.listPassengers();
  }
  AfterViewInit() {
    this.passengersList.paginator = this.paginator;
  }
  listPassengers() {
    this.store.select('passenger').subscribe((res: any) => {
      this.sharedService.flightInfo.subscribe((data: any) => {
        this.flightNo = data.flightNo;
      });
      this.tempPassengersList = this.passengersList = res.passengers.filter(
        (i: any) => i.flightNumber === this.flightNo
      );
      this.sharedService.flightInformation({
        flightNo: this.flightNo,
        passengers: this.passengersList,
      });
    });
    this.store.dispatch(flightNumber());
  }

  updatePassenger(id: any, seatno: any) {
    this.router.navigate(['passenger/', id, seatno, this.flightNo]);
  }
  applyfilter() {
    this.passengersList = this.tempPassengersList;
    if (this.filterBy == 'checkIn') {
      this.passengersList = this.passengersList.filter((data: any) => {
        return data.checkedIn == true;
      });
    } else if (this.filterBy == 'notCheckIn') {
      this.passengersList = this.passengersList.filter((data: any) => {
        return data.checkedIn == false;
      });
    } else if (this.filterBy == 'infant') {
      this.passengersList = this.passengersList.filter((data: any) => {
        return data.infant == true;
      });
    } else if (this.filterBy == 'wheelChair') {
      this.passengersList = this.passengersList.filter((data: any) => {
        return data.wheelChair === true;
      });
    } else if (this.filterBy == 'missPass') {
      this.passengersList = this.passengersList.filter((data: any) => {
        return data.passportNumber === '';
      });
    } else if (this.filterBy == 'missAdd') {
      this.passengersList = this.passengersList.filter((data: any) => {
        return data.address === '';
      });
    } else if (this.filterBy == 'missDob') {
      this.passengersList = this.passengersList.filter((data: any) => {
        return data.dateOfBirth === '';
      });
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(FlightServiceDialogComponent, {
      data: {
        flightNo: this.flightNo,
      },
      height: '350px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == 'success') {
        this.saved = true;
      } else {
        this.saved = false;
      }
      setTimeout(() => {
        this.saved = false;
      }, 3000);

      console.log('The dialog was closed', result);
    });
  }
}
