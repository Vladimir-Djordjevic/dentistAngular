import { Component, OnInit } from '@angular/core';
import { DentalServices } from '../../Model/dentalServices';
import { ActivatedRoute } from '@angular/router';
import { DentalServicesService } from '../../services/dental-services.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-dental-services-detail',
  templateUrl: './dental-services-detail.component.html',
  styleUrls: ['./dental-services-detail.component.scss'],
})
export class DentalServicesDetailComponent implements OnInit {
  service?: DentalServices;
  serviceId?: number;
  constructor(
    private activedRouter: ActivatedRoute,
    private dentalService: DentalServicesService
  ) {}

  ngOnInit(): void {
    this.getService();
  }

  private getService() {
    this.serviceId = Number(this.activedRouter.snapshot.paramMap.get('id'));
    console.log(this.serviceId);
    this.dentalService
      .getServiceById(this.serviceId)
      .pipe(take(1))
      .subscribe((service) => {
        this.service = service;
      });
  }
}
