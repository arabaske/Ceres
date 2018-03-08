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
      transition(':enter', [
        style({transform: 'translateX(100%)', opacity: 0}),
        animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translateX(0)', opacity: 1}),
        animate('500ms', style({transform: 'translateX(-100%)', opacity: 0}))
      ])
    ])
  ]
})
export class SlideListComponent implements OnInit {

  @Input() slides: Slide[];
  @Input() config: SliderConfig;
  currentSlideIndex: number;

  constructor() {
  }

  ngOnInit() {
    this.currentSlideIndex = 0;
    this.switchSlide(0);
  }

  next_slide() {
    this.currentSlideIndex ++;
  }

  switchSlide(id: number) {
    this.slides[this.currentSlideIndex].deactivate();
    this.currentSlideIndex = id;
    this.slides[id].activate();
  }

}
