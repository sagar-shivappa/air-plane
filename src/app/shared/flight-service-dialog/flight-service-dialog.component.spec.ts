import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightServiceDialogComponent } from './flight-service-dialog.component';

describe('FlightServiceDialogComponent', () => {
  let component: FlightServiceDialogComponent;
  let fixture: ComponentFixture<FlightServiceDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightServiceDialogComponent]
    });
    fixture = TestBed.createComponent(FlightServiceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
