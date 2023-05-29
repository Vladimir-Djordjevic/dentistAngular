import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  officeHoursTitle: string = 'Office Hours';
  workingHours: string[] = [
    'Monday: 8am - 5pm',
    'Teusday: 8am - 5pm',
    'Wednesday: 8am - 5pm',
    'Thursday: 8am - 5pm',
    'Friday: 8am - 5pm',
  ];
  locationTitle: string = 'Location';
  location: string = 'Some Street and number';
  contactTitle: string = 'Email and Phone';
  email: string = 'email@gmail.com';
  phone: string = '062/222-222';

  constructor() {}

  ngOnInit(): void {}
}
