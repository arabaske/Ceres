import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {animate, state, style, transition, trigger, keyframes} from '@angular/animations';
import { SLIDES } from '../mock-slides';
import { Slide } from '../models/slide';
import { SliderConfig } from '../models/sliderConfig';
import { SlideAnimationModel } from '../models/slide.animation.model';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import 'rxjs/add/operator/takeWhile';
import { takeWhile } from 'rxjs/operators';
import 'rxjs/add/observable/timer';
import { forEach } from '@angular/router/src/utils/collection';
import { SlideAnim } from '../animations/slide.animation';

@Component({
  selector: 'app-slide-list',
  templateUrl: './slide-list.component.html',
  styleUrls: ['./slide-list.component.css'],
  animations: [SlideAnim]
})
export class SlideListComponent implements OnInit, OnDestroy {

  @Input() slides: Slide[];
  @Input() config: SliderConfig;
  currentSlideIndex: number;

  slideAnimation: SlideAnimationModel;
  transitionCounter: number;
  private alive = true;
  private touched = false;
  public isLoaded = false;

  timerObservable =  Observable.timer(4000, 4000);

  constructor() {
    console.log('CONSTRUCT component slide-list');
    this.currentSlideIndex = 0;
    this.slideAnimation = new SlideAnimationModel();
    this.slideAnimation.fromSlideID = 0;
    this.slideAnimation.toSlideID = 0;
    this.transitionCounter = 0;
  }

  checkLoadStatus(): boolean{
    
    var result = 0;
    this.slides.forEach(element => {
      if(element.isLoaded) result = result + 1;
    });

    console.log('Check loading status' + result);

    return (result === this.slides.length);
  }

  ngOnInit() {
    console.log('INIT component slide-list');
    this.switchSlide(0, false);
  }

  public ngOnDestroy() {
    console.log('Destroy component slide-list');
    this.alive = false;
    this.initSlideState();
  }

  private initSlideState() {
    // re-init the slides elements.
    this.slides.forEach(element => {
      element.toRight();
      element.setLoaded(false);
    });
  }

  prevSlide() {
    if (this.currentSlideIndex >= 1) {
      this.switchSlide(this.currentSlideIndex - 1, true);
    }
  }

  nextSlide(automatic) {
    if (this.currentSlideIndex < this.slides.length - 1) {
      this.switchSlide(this.currentSlideIndex + 1, !automatic);
    } else {
      this.switchSlide(0, !automatic);
    }
  }

  animationDone($event, slide) {
    console.log('ANIM DONE ' + $event.fromState + ' : ' + $event.toState);
    console.log('____COUNTER: ' + this.transitionCounter);
    if (($event.fromState !== 'void') && ($event.toState !== 'void')) {
      if (this.transitionCounter === 0) {
        this.transitionCounter ++;
      } else {
        this.slideAnimation.isBeingAnimated = false;
        this.transitionCounter = 0;
      }
    }
  }


  animationStart($event, slide, slides) {
    console.log('ANIM START ' + $event.fromState + ' : ' + $event.toState);
    // console.log(slides);
    if (($event.fromState !== 'void') && ($event.toState !== 'void')) {
      this.slideAnimation.isBeingAnimated = true;
    }

    if ($event.fromState === 'active') {
      this.slideAnimation.toSlideID = slide.id;
    } else if (($event.fromState !== 'void') && ($event.toState === 'active')) {
      this.slideAnimation.fromSlideID = slide.id;
    }
  }

  switchSlide(id: number, touched: boolean) {
    if (touched) {
      this.touched = true;
    }
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
    return this.alive && ((slide.id === this.currentSlideIndex)
            || ((this.slideAnimation.isBeingAnimated === true) && (this.slideAnimation.isSlideIncluded(slide))));
  }

  isOverlayVisible(slide: Slide) {
    return this.alive && (slide.id === this.currentSlideIndex) && !(this.slideAnimation.isBeingAnimated)
  }

  //EVENT

  onSlideLoaded(id: number){
    console.log('OnSlideLoaded ' + id);
    this.isLoaded = this.checkLoadStatus();

    if (this.slides.length > 1 && this.isLoaded) {
      this.timerObservable
      .takeWhile(val => (this.alive && !this.touched))
      .subscribe(t => {
          if(this.isLoaded) this.nextSlide(true);
      });
    }
  }

}
