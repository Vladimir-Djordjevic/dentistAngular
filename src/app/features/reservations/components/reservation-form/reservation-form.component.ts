import { take } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { DentalServices } from 'src/app/features/dentalServices/Model/dentalServices';
import { DentalServicesService } from 'src/app/features/dentalServices/services/dental-services.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Reservation } from '../../Model/reservation';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss'],
})
export class ReservationFormComponent implements OnInit {
  dentalServices?: DentalServices[];
  formGroup: FormGroup | any;

  private readonly nameValidators = [
    Validators.required,
    Validators.pattern(/^[A-Z][a-zA-Z0-9\s]{0,29}$/),
  ];

  constructor(
    private dentalServ: DentalServicesService,
    private resevations: ReservationService
  ) {}

  ngOnInit(): void {
    this.getAllDentalServices();
    this.createForm();
  }

  getAllDentalServices() {
    this.dentalServ
      .getAll()
      .pipe(take(1))
      .subscribe((services) => (this.dentalServices = services));
  }

  createForm() {
    this.formGroup = new FormGroup({
      firstName: new FormControl('', this.nameValidators),
      lastName: new FormControl('', this.nameValidators),
      date: new FormControl('', Validators.required),
      time: new FormControl('', Validators.required),
      select: new FormControl(0, Validators.pattern(/^[1-6]$/)),
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      const reservation: Reservation = {
        firstName: this.formGroup.value.firstName,
        lastName: this.formGroup.value.lastName,
        dateTime: this.formatedDate(this.formGroup.value.date),
        serviceId: this.formGroup.value.select,
      };
      this.resevations
        .reservation(reservation)
        .pipe(take(1))
        .subscribe(() => console.log('Success'));
      this.formGroup.reset();
    }
  }

  formatedDate(value: string) {
    const date = new Date(value);

    const dateFormated =
      date.getDate() +
      '-' +
      (date.getMonth() + 1) +
      '-' +
      date.getFullYear() +
      ' ' +
      this.formGroup.value.time;
    return dateFormated;
  }
}
