import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { AngularFirestore } from 'angularfire2/firestore';
import { LoggingService } from '../logging.service';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-reservations-calendar',
  templateUrl: './reservations-calendar.component.html',
  styleUrls: ['./reservations-calendar.component.css']
})
export class ReservationsCalendarComponent implements OnInit {

  reservationToDisplay$: Observable<Reservation[]>;
  fromDateRangeFilter$: BehaviorSubject<[number, number]|null>;

  constructor(db: AngularFirestore, private logService: LoggingService) {
    this.reservationToDisplay$ = this.fromDateRangeFilter$.switchMap(([monthDisplayed, yearDisplayed]) =>
    db.collection<Reservation>('/reservations', 
        ref => ref.where('MONTHS_TO_RENDER.' + yearDisplayed + '_' + monthDisplayed, "==", true)).valueChanges()
    );
   }

  ngOnInit() {
  }

}
