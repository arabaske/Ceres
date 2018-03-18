import { Component, OnInit } from '@angular/core';

import { Reservation } from '../models/reservation';

import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {NgbDatepickerI18n} from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';

import { AngularFirestore } from 'angularfire2/firestore';


const now = new Date();

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  submitted = false;
  model = new Reservation(1, '', '', '', '', new Date(), new Date(), '');
  calendarModel: NgbDateStruct;
  date: {year: number, month: number};
  public items: Observable<any[]>;

  selectToday() {
    this.calendarModel = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }

  constructor(db: AngularFirestore) {
    this.items = db.collection('/reservations').valueChanges();
  }

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
