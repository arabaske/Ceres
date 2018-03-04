import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  applicationName: string;
  Home: string;
  Cabin: string;
  Reservation: string;

  constructor() {
    this.Home = 'Home';
    this.Cabin = 'Cabin';
    this.Reservation = 'Reservation';
    this.applicationName = 'Martines Stuga';
  }

  ngOnInit() {
  }

}
