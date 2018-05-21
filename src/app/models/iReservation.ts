import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

export interface IReservation 
{ firstName: string;
  LastName: string;
  email: string;
  phone: string;
  fromDate: NgbDateStruct;
  toDate: NgbDateStruct;
  additionalInformation:string;
  status:string; 
}

export interface IReservationId extends IReservation {id: string; }