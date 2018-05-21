import { Component, OnInit, OnDestroy } from '@angular/core';
import { Reservation } from '../models/reservation';
import { AngularFirestore } from 'angularfire2/firestore';
import { LoggingService } from '../logging.service';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

const now = new Date();

const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one && two && two.year === one.year && two.month === one.month && two.day === one.day;

const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day < two.day : one.month < two.month : one.year < two.year;

const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day > two.day : one.month > two.month : one.year > two.year;

const nowDate: NgbDateStruct = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()}



@Component({
  selector: 'app-reservations-calendar',
  templateUrl: './reservations-calendar.component.html',
  styleUrls: ['./reservations-calendar.component.css']
})
export class ReservationsCalendarComponent implements OnInit, OnDestroy {

  reservationToDisplay$: Observable<Reservation[]>;
  dateRangeFilter$: BehaviorSubject<[number, number]|null>;
  model: NgbDateStruct;
  date: {year: number, month: number};
  private reservationsArray: Reservation[];
  private alive$: ReplaySubject<boolean> = new ReplaySubject(1);

  public legend: {name: string, color: string}[] = [{"name": "Booked", color:"custom-day faded"}];

  selectToday() {
    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }

  constructor(db: AngularFirestore, private logService: LoggingService) {
    this.dateRangeFilter$ = new BehaviorSubject(null);
    

    this.reservationToDisplay$ = this.dateRangeFilter$.switchMap(([monthDisplayed, yearDisplayed]) =>
    db.collection<Reservation>('/reservations', 
        ref => ref.where('MONTHS_TO_RENDER.' + yearDisplayed + '_' + monthDisplayed, "==", true)).valueChanges()
    ).takeUntil(this.alive$);

    this.dateRangeFilter$.next([now.getMonth() + 1, now.getFullYear()]);


   }



  ngOnInit() {
    this.reservationToDisplay$.subscribe(val => {
      if(val != null) this.reservationsArray = val;
    });
  }

  public ngOnDestroy() {
    this.alive$.next(true);
    this.alive$.complete();
  }

  isDateBooked(date: NgbDateStruct){

    if(this.reservationsArray === null) return false;

    for (const reserv of this.reservationsArray) {
      if(reserv != null && this.isInside(reserv, date)){
        return true;
      }
    }
    return false;
  }

  isDateDisabled(date: NgbDateStruct, target: string){
    if(target === 'from'){
      if(this.model != null){
        return (before(date, nowDate) || after(date, this.model))
      } else {
        return before(date, nowDate);
      }  
    } else {
      if(this.model != null) return before(date, this.model);
      else return before(date, nowDate);
    }  
  }

  isFromDateDisabled = (date: NgbDateStruct, current: {month: number}) => {
    return (date.month !== current.month) || this.isDateDisabled(date, 'from'); 
  }

  onDateNavigate(next: NgbDateStruct){
    this.dateRangeFilter$.next([next.month, next.year]);
  }

   isInside(reservation: Reservation, date: NgbDateStruct){
    return (before(reservation.fromDate, date) && after(reservation.toDate, date)) 
    || equals(reservation.fromDate, date) || equals(reservation.toDate, date);
  }


}
