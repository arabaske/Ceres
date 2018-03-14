import { Component, OnInit } from '@angular/core';

import { Reservation } from '../models/reservation';

import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {NgbDatepickerI18n} from '@ng-bootstrap/ng-bootstrap';


const now = new Date();

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  model = new Reservation(1, '', '', '', '', new Date(), new Date(), '');
  calendarModel: NgbDateStruct;
  date: {year: number, month: number};

  selectToday() {
    this.calendarModel = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }

  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
