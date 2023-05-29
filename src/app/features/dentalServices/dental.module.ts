import { DentalServicesDetailComponent } from './components/dental-services-detail/dental-services-detail.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DenatalServicesComponent } from './components/dental-services/dental-services.component';
import { DentalServiceComponent } from './components/dental-service/dental-service.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DentalRoutingModule } from './dental-routing.module';
@NgModule({
  declarations: [
    DenatalServicesComponent,
    DentalServiceComponent,
    DentalServicesDetailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HttpClientModule,
    DentalRoutingModule,
  ],
  exports: [DenatalServicesComponent],
})
export class DentalModule {}
