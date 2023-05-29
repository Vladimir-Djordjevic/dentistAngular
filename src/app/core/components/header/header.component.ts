import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navbarLinks: string[] = ['Home', 'Reservations', 'Login', 'Logout'];

  constructor() {}

  ngOnInit(): void {}
}
