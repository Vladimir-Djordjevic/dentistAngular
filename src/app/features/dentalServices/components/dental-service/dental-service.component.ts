import { Component, Input, OnInit } from '@angular/core';
import { DentalServices } from '../../Model/dentalServices';

@Component({
  selector: 'app-dental-service',
  templateUrl: './dental-service.component.html',
  styleUrls: ['./dental-service.component.scss'],
})
export class DentalServiceComponent implements OnInit {
  @Input() dentalService!: DentalServices;
  constructor() {}

  ngOnInit(): void {}
}
