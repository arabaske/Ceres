import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { Observable } from 'rxjs/Observable';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/switchMap';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  constructor(private logService: LoggingService) {
   }

  ngOnInit() {
  }

}
