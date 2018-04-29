import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { LoggingService } from '../logging.service';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-reservations-list',
  templateUrl: './reservations-list.component.html',
  styleUrls: ['./reservations-list.component.css']
})
export class ReservationsListComponent implements OnInit {

  reservations$: Observable<Reservation[]>;

  constructor(db: AngularFirestore, private logService: LoggingService) {
    this.reservations$ = db.collection<Reservation>('/reservations').valueChanges();
   }

  ngOnInit() {
    
  }

}
