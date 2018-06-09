import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { LoggingService } from '../logging.service';
import { Reservation } from '../models/reservation';
import { IReservation, IReservationId } from '../models/iReservation';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reservations-list',
  templateUrl: './reservations-list.component.html',
  styleUrls: ['./reservations-list.component.css']
})
export class ReservationsListComponent implements OnInit {

  reservations$: Observable<IReservationId[]>;
  reservationsStore: AngularFirestoreCollection<IReservation>;
  _db: AngularFirestore;

  filters: string[] = ['hello', 'world'];

  constructor(db: AngularFirestore, private logService: LoggingService) {
    this._db = db;
    this.reservationsStore = this._db.collection<IReservation>('/reservations');
    this.reservations$ = this.reservationsStore.snapshotChanges().map(actions =>{
      return actions.map(a => {
        const data = a.payload.doc.data() as IReservation;
        const id = a.payload.doc.id;
        return {id,...data};
      })
    });
   }

  ngOnInit() {

  }

}
