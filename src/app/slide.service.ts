import { Injectable } from '@angular/core';
import { Slide } from './models/slide';
import { SLIDES, COTTAGES_SLIDES } from './mock-slides';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class SlideService {

  constructor() { }

  getShellSlide(): Observable<Slide[]> {
    return of(SLIDES);
  }

  getCottageSlide(): Observable<Slide[]> {
    return of(COTTAGES_SLIDES);
  }

}
