import { Component, OnInit } from '@angular/core';

import { Reservation } from '../models/reservation';

import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {NgbDatepickerI18n} from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/combineLatest';
import { CollectionReference, Query } from '@firebase/firestore-types';


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
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  submitted = false;
  model = new Reservation('', '', '', '', null, null, '');

  fromDateDisplayed: NgbDateStruct;
  toDateDisplayed: NgbDateStruct;

  public fromItems$: Observable<Reservation[]>;
  public toRangeItems$: Observable<Reservation[]>;

  private firestore: AngularFirestore;
  private reservationsCollection: AngularFirestoreCollection<Reservation>;

  private fromReservationsArray: Reservation[];
  private toReservationsArray: Reservation[];

  fromDateRangeFilter$: BehaviorSubject<[number, number]|null>;
  toDateRangeFilter$: BehaviorSubject<[number, number]|null>;


  constructor(db: AngularFirestore) {
    this.firestore = db;
    this.reservationsCollection = db.collection('/reservations');

    this.fromDateRangeFilter$ = new BehaviorSubject(null);
    this.toDateRangeFilter$ = new BehaviorSubject(null);
    //this.items = this.reservationsCollection.valueChanges();
    
    this.fromItems$ = this.fromDateRangeFilter$.switchMap(([monthDisplayed, yearDisplayed]) =>
    db.collection<Reservation>('/reservations', ref => ref.where('MONTHS_TO_RENDER.' + yearDisplayed + '_' + monthDisplayed, "==", true)).valueChanges()
    );

    this.toRangeItems$ = this.toDateRangeFilter$.switchMap(([monthDisplayed, yearDisplayed]) =>
    db.collection<Reservation>('/reservations', ref => ref.where('MONTHS_TO_RENDER.' + yearDisplayed + '_' + monthDisplayed, "==", true)).valueChanges()
    );

    this.fromDateRangeFilter$.next([now.getMonth() + 1, now.getFullYear()]);
    this.toDateRangeFilter$.next([now.getMonth() + 1, now.getFullYear()]);

    this.fromItems$.subscribe(val => this.fromReservationsArray = val);
    this.toRangeItems$.subscribe(val => this.toReservationsArray = val);
  }

  ngOnInit() {
    
  }

  onSubmit() { 
    this.submitted = true; 
    

    this.reservationsCollection.add(<Reservation>this.model.getData())
      .then(ref => {
        console.log('Added document with ID: ', ref.id);
    });
  
  }

  // TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.model); }

  isDateBooked(date: NgbDateStruct, target: string){

    var targetArray: Reservation[] = (target === 'from')? this.fromReservationsArray : this.toReservationsArray;

    for (const reserv of targetArray) {
      if(this.isInside(reserv, date)){
        return true;
      }
    }
    return false;
  }

  isDateOutside(date: NgbDateStruct, target: string){

    var targetDate : NgbDateStruct 
    if (target==='from') {
      targetDate = (this.fromDateDisplayed == null) ? nowDate : this.fromDateDisplayed;
    } else {
      targetDate = (this.toDateDisplayed == null) ? nowDate : this.toDateDisplayed;
    }

    const firstDate: NgbDateStruct = {day: 1, month: targetDate.month, year: targetDate.year};
    const firstDateNextMonth: NgbDateStruct = {day: 31, month: targetDate.month, year: targetDate.year};

    return before(date, firstDate) || after(date, firstDateNextMonth)
  }

  isDateDisabled(date: NgbDateStruct, target: string){
    if(target === 'from'){
      if(this.model.toDate != null){
        return (before(date, nowDate) || after(date, this.model.toDate))
      } else {
        return before(date, nowDate);
      }  
    } else {
      if(this.model.fromDate != null) return before(date, this.model.fromDate);
      else return before(date, nowDate);
    }  
  }

  isFromDateDisabled = (date: NgbDateStruct, current: {month: number}) => {
    return (date.month !== current.month) || this.isDateDisabled(date, 'from'); 
  }

  isToDateDisabled = (date: NgbDateStruct, current: {month: number}) => {
    return (date.month !== current.month) || this.isDateDisabled(date, 'to'); 
  }

  onFromDateNavigate(next: NgbDateStruct){
    this.fromDateDisplayed = next;
    this.fromDateRangeFilter$.next([next.month, next.year]);
  }

  onToDateNavigate(next: NgbDateStruct){
    this.toDateDisplayed = next;
    this.toDateRangeFilter$.next([next.month, next.year]);
  }

   isInside(reservation: Reservation, date: NgbDateStruct){
    return (before(reservation.fromDate, date) && after(reservation.toDate, date)) 
    || equals(reservation.fromDate, date) || equals(reservation.toDate, date);
  }

}
