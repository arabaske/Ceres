import { Component, OnInit, Input } from '@angular/core';
import {animate, state, style, transition, trigger, keyframes} from '@angular/animations';
import { SLIDES } from '../mock-slides';
import { Slide } from '../models/slide';
import { SliderConfig } from '../models/sliderConfig';
import { SlideAnimation } from '../models/slide.animation.model';

@Component({
  selector: 'app-slide-list',
  templateUrl: './slide-list.component.html',
  styleUrls: ['./slide-list.component.css'],
  animations: [
    trigger('slideState', [
      transition('right-sided => active', [
        style({transform: 'translateX(0)', opacity: 1}),
        animate('500ms', style({transform: 'translateX(-25%)', opacity: 1}))
      ]),
      transition('active => left-sided', [
        style({transform: 'translateX(0)', opacity: 1}),
        animate('500ms', style({transform: 'translateX(-25%)', opacity: 1}))
      ]),
      transition('left-sided => active', [
        style({transform: 'translateX(-25%)', opacity: 1}),
        animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
      ]),
      transition('active => right-sided', [
        style({transform: 'translateX(-25%)', opacity: 1}),
        animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
      ])
    ])
  ]
})
export class SlideListComponent implements OnInit {

  @Input() slides: Slide[];
  @Input() config: SliderConfig;
  currentSlideIndex: number;

  slideAnimation: SlideAnimation;
  transitionCounter: number;

  constructor() {
  }

  ngOnInit() {
    this.currentSlideIndex = 0;
    this.slideAnimation = new SlideAnimation();
    this.slideAnimation.fromSlideID = 0;
    this.slideAnimation.toSlideID = 0;
    this.transitionCounter = 0;
    this.switchSlide(0);
  }

  prevSlide() {
    if (this.currentSlideIndex >= 1) {
      this.switchSlide(this.currentSlideIndex - 1);
    }
  }

  nextSlide() {
    if (this.currentSlideIndex < this.slides.length - 1) {
      this.switchSlide(this.currentSlideIndex + 1);
    }
  }

  animationDone($event, slide) {
    console.log('ANIM DONE ' + $event.fromState + ' : ' + $event.toState);
    console.log('____COUNTER: ' + this.transitionCounter);
    if (this.transitionCounter === 0) {
      this.transitionCounter ++;
    } else {
      this.slideAnimation.isBeingAnimated = false;
      this.transitionCounter = 0;
    }
  }


  animationStart($event, slide, slides) {
    console.log('ANIM START ' + $event.fromState + ' : ' + $event.toState);
    // console.log(slides);
    this.slideAnimation.isBeingAnimated = true;
    if ($event.fromState === 'active') {
      this.slideAnimation.toSlideID = slide.id;
    } else if (($event.fromState !== 'void') && ($event.toState === 'active')) {
      this.slideAnimation.fromSlideID = slide.id;
    }
  }

  switchSlide(id: number) {
    console.log('switching ' + this.currentSlideIndex + ' -> ' + id);
    if (id > this.currentSlideIndex) {
      for (let _i = this.currentSlideIndex; _i < id; _i++ ) {
        this.slides[_i].toLeft();
      }
    } else if (id < this.currentSlideIndex) {
      for (let _i = this.currentSlideIndex; _i > id; _i-- ) {
        this.slides[_i].toRight();
      }
    }

    this.currentSlideIndex = id;
    this.slides[this.currentSlideIndex].toCurrent();
  }

  isVisible(slide: Slide) {
    return ((slide.id === this.currentSlideIndex)
            || ((this.slideAnimation.isBeingAnimated === true) && (this.slideAnimation.isSlideIncluded(slide))));
  }

}
