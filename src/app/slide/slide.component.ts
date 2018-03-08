import { Component, OnInit, Input } from '@angular/core';
import {animate, state, style, transition, trigger, keyframes} from '@angular/animations';
import { Slide } from '../models/slide';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})

export class SlideComponent implements OnInit {

  @Input() currentSlideId: number;
  @Input() slide: Slide;
  @Input() isFullScreen = false;


  constructor() {
    // this.slide.state = (this.slide.id == this.currentSlideId) ? 'active' : 'inactive';
  }

  ngOnInit() {
  }

}
