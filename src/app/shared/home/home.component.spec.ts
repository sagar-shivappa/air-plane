import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { NavigationStart, Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: Router;
  let navigateSpy: any;
  NavigationStart;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [HomeComponent],
      providers: [RouterTestingModule, SharedService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    navigateSpy = spyOn(router, 'navigate');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check the checkIn  option selected', () => {
    component.selectedOption('checkIn');
    expect(navigateSpy).toHaveBeenCalledWith(['checkin/home']);
  });
  it('should check the admin option selected', () => {
    component.selectedOption('admin');
    expect(navigateSpy).toHaveBeenCalledWith(['flights']);
  });
});
