import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DentalServices } from '../Model/dentalServices';

@Injectable({
  providedIn: 'root',
})
export class DentalServicesService {
  constructor(private httpCilent: HttpClient) {}

  getAll(): Observable<DentalServices[]> {
    return this.httpCilent.get<DentalServices[]>(
      'http://localhost:5000/services'
    );
  }

  getBySearch(search: string): Observable<DentalServices[]> {
    return this.httpCilent.get<DentalServices[]>(
      `http://localhost:5000/services?name_like=${search}`
    );
  }

  getServiceById(id: number): Observable<DentalServices> {
    return this.httpCilent.get<DentalServices>(
      `http://localhost:5000/services/${id}`
    );
  }
}
