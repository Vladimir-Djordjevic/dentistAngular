import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';
import { ReservationsRoutingModule } from './reservations-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservationTableComponent } from './components/reservation-table/reservation-table.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowErrorDirective } from './directives/show-error.directive';
import { CheckErrorsPipe } from './pipes/check-errors.pipe';

@NgModule({
  declarations: [
    ReservationFormComponent,
    ReservationTableComponent,
    ShowErrorDirective,
    CheckErrorsPipe,
  ],
  imports: [
    CommonModule,
    ReservationsRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
})
export class ReservationsModule {}
