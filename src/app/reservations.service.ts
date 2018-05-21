import { Injectable, Input } from '@angular/core';
import { LoggingService } from './logging.service';
import { IReservationId } from './models/iReservation';
import { Reservation } from './models/reservation';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class ReservationsService {

  constructor(private logService: LoggingService) { }

  updateStatus(db: AngularFirestore, id: string, nextStatus: string){
    this.logService.log("Updating status of ID:" + id + " to: " + nextStatus);
    var ref = db.firestore.collection("/reservations").doc(id);

    return db.firestore.runTransaction(function(transaction) {
      // This code may get re-run multiple times if there are conflicts.
      return transaction.get(ref).then(function(doc) {
          if (!doc.exists) {
              throw "Document does not exist!";
          }

          transaction.update(ref, { status: nextStatus });
      });
      }).then(function() {
          
          //console.log("Transaction successfully committed!");
      }).catch(function(error) {
         console.log("Transaction failed: ", error);
      });
  }

}
