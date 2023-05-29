import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DenatalServicesComponent } from './components/dental-services/dental-services.component';
import { DentalServicesDetailComponent } from './components/dental-services-detail/dental-services-detail.component';

const routes: Routes = [
  {
    path: '',
    component: DenatalServicesComponent,
  },
  {
    path: 'dentalService/:id',
    component: DentalServicesDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DentalRoutingModule {}
