import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvailableFlightsComponent } from './shared/available-flights/available-flights.component';

const routes: Routes = [
  { path: 'flights', component: AvailableFlightsComponent },
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
