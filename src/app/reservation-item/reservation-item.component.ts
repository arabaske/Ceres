import { Component, OnInit, Input } from '@angular/core';
import { Reservation } from '../models/reservation';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

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

  dateFormat(date: NgbDateStruct): string{
    return (date.year + "-" + date.month + "-" + date.day);
  }

}
