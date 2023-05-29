import { Subject, take, takeUntil } from 'rxjs';
import { DentalServicesService } from '../../services/dental-services.service';
import { DentalServices } from './../../Model/dentalServices';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-dental-services',
  templateUrl: './dental-services.component.html',
  styleUrls: ['./dental-services.component.scss'],
})
export class DenatalServicesComponent implements OnInit, OnDestroy {
  dentalServices?: DentalServices[] = [];
  constructor(private service: DentalServicesService) {}
  searchValue!: string;

  private unsubscribe$: Subject<boolean> = new Subject<boolean>();

  ngOnInit(): void {
    this.getAllDentalServices();
  }

  private getAllDentalServices() {
    this.service
      .getAll()
      .pipe(take(1))
      .subscribe((services) => {
        this.dentalServices = services;
      });
  }
  onBlur(value: string) {
    this.service
      .getBySearch(value)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((service) => {
        this.dentalServices = service;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
