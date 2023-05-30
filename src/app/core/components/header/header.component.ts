import { Component, OnInit } from '@angular/core';
import { NavLinks } from '../../Model/navLinks';
import { Navlink } from '../../Model/navLink.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navbarLinks: NavLinks[] = [
    {
      name: Navlink.HOME,
      routerPath: '/',
    },
    {
      name: Navlink.RESERVATION,
      routerPath: 'reservations/reservationTable',
    },
    {
      name: Navlink.LOGIN,
      routerPath: 'login',
    },
    {
      name: Navlink.LOGOUT,
      routerPath: 'logout',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
