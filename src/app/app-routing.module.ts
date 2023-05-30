import { NotFoundComponent } from './features/not-found/not-found.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/dentalServices/dental.module').then(
        (module) => module.DentalModule
      ),
  },
  {
    path: 'reservations',
    loadChildren: () =>
      import('./features/reservations/reservations.module').then(
        (module) => module.ReservationsModule
      ),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
