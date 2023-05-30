import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';
import { ReservationTableComponent } from './components/reservation-table/reservation-table.component';

const routes: Routes = [
  {
    path: 'reservationForm',
    component: ReservationFormComponent,
  },
  {
    path: 'reservationTable',
    component: ReservationTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationsRoutingModule {}
