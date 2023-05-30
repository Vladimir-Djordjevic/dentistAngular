import { Component, OnDestroy, OnInit } from '@angular/core';
import { Reservation } from '../../Model/reservation';
import { ReservationService } from '../../services/reservation.service';
import { DentalServicesService } from 'src/app/features/dentalServices/services/dental-services.service';
import { DentalServices } from 'src/app/features/dentalServices/Model/dentalServices';
import { Subject, switchMap, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-reservation-table',
  templateUrl: './reservation-table.component.html',
  styleUrls: ['./reservation-table.component.scss'],
})
export class ReservationTableComponent implements OnInit, OnDestroy {
  reservations!: Reservation[];
  services!: DentalServices[];
  serviceName?: string;

  private unsubscribe$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private reservationsService: ReservationService,
    private dentalServices: DentalServicesService
  ) {}

  ngOnInit(): void {
    this.getAllDentalServices();
    this.getAllReservations();
  }

  private getAllDentalServices() {
    this.dentalServices
      .getAll()
      .pipe(take(1))
      .subscribe((services) => {
        this.services = services;
      });
  }

  private getAllReservations() {
    this.reservationsService
      .getReservations()
      .pipe(take(1))
      .subscribe((reservations) => {
        this.reservations = reservations;
      });
  }
  deleteReservation(id: number) {
    this.reservationsService
      .deleteReservation(id)
      .pipe(
        takeUntil(this.unsubscribe$),
        switchMap((reservation) => {
          console.log(reservation);
          return this.reservationsService.getReservations();
        })
      )
      .subscribe((reservations) => (this.reservations = reservations));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
