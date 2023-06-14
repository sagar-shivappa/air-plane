import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvailableFlightsComponent } from './shared/available-flights/available-flights.component';
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'flights', component: AvailableFlightsComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'checkin',
    loadChildren: () =>
      import('./check-in/check-in.module').then((m) => m.CheckInModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
