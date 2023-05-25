import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableFlightsComponent } from './available-flights.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('AvailableFlightsComponent', () => {
  let component: AvailableFlightsComponent;
  let fixture: ComponentFixture<AvailableFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [AvailableFlightsComponent],
      providers: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
