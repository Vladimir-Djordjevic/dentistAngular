import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../Model/reservation';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  constructor(private httpClient: HttpClient) {}

  getReservations(): Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>(
      'http://localhost:5000/reservations'
    );
  }
  deleteReservation(id: number): Observable<Reservation> {
    return this.httpClient.delete<Reservation>(
      `http://localhost:5000/reservations/${id}`
    );
  }

  reservation(reservation: any) {
    return this.httpClient.post(
      `http://localhost:5000/reservations/`,
      reservation
    );
  }
}
