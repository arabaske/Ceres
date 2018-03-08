import { Component, OnInit, Input } from '@angular/core';
import {animate, state, style, transition, trigger, keyframes} from '@angular/animations';
import { SLIDES } from '../mock-slides';
import { Slide } from '../models/slide';
import { SliderConfig } from '../models/sliderConfig';

@Component({
  selector: 'app-slide-list',
  templateUrl: './slide-list.component.html',
  styleUrls: ['./slide-list.component.css'],
  animations: [
    trigger('slideState', [
      state('in', style({transform: 'translateX(0)'})),
      transition('inactive => active', [
        animate(300, keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
        ]))
      ]),
      transition('active => inactive', [
        animate(300, keyframes([
          style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
          style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
          style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
        ]))
      ])
    ])
  ]
})
export class SlideListComponent implements OnInit {

  @Input() slides: Slide[];
  @Input() config: SliderConfig;
  currentSlideIndex: number;

  constructor() {
    this.currentSlideIndex = 1;
  }

  ngOnInit() {
  }

  next_slide() {
    this.currentSlideIndex ++;
  }

  switchSlide(id:number){
    this.slides[this.currentSlideIndex].deactivate();
    this.currentSlideIndex = id; 
    this.slides[id].activate();
  }

}
