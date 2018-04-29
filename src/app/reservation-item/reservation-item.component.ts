import { Component, OnInit, Input } from '@angular/core';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-reservation-item',
  templateUrl: './reservation-item.component.html',
  styleUrls: ['./reservation-item.component.css']
})
export class ReservationItemComponent implements OnInit {

  @Input() reservation: Reservation;

  constructor() { }

  ngOnInit() {
  }

}
