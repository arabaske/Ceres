import { Component, OnInit, Input } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { LoggingService } from '../logging.service';
import { IReservationId } from '../models/iReservation';
import { Reservation } from '../models/reservation';
import { ReservationsService } from '../reservations.service';

@Component({
  selector: 'app-reservation-item',
  templateUrl: './reservation-item.component.html',
  styleUrls: ['./reservation-item.component.css']
})
export class ReservationItemComponent implements OnInit {

  @Input() reservation: IReservationId;
  @Input() db: AngularFirestore;

  constructor(private logService: LoggingService, private reservationService: ReservationsService) { }

  ngOnInit() {
  }

  dateFormat(date: NgbDateStruct): string{
    return (date.year + "-" + 
      ((date.month < 10) ? "0" + date.month : date.month) + "-" +
      ((date.day < 10) ? "0" + date.day: date.day));
  }

  public approve(){
    if(this.reservation.status === "new"){
      this.reservationService.updateStatus(this.db, this.reservation.id, "Approved");
    }
  }

  public reject(){
    if(this.reservation.status === "new"){
      this.reservationService.updateStatus(this.db, this.reservation.id, "Rejected");
    }
  }

}
