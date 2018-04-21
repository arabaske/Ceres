import { Injectable } from '@angular/core';
import { Slide } from './models/slide';
import { SLIDES, COTTAGES_SLIDES } from './mock-slides';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operator/delay';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SlideService {

  //private slideUrl = 'api/slides';  // URL to web api

  //constructor(private http: HttpClient) { }
  constructor() {}

  getShellSlide(): Observable<Slide[]> {
    return of(SLIDES);
  }

  getCottageSlide(): Observable<Slide[]> {
    return of(COTTAGES_SLIDES);
  }

}
