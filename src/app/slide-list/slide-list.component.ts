import { Component, OnInit } from '@angular/core';
import { SLIDES } from '../mock-slides';
import { Slide } from '../models/slide';

@Component({
  selector: 'app-slide-list',
  templateUrl: './slide-list.component.html',
  styleUrls: ['./slide-list.component.css']
})
export class SlideListComponent implements OnInit {

  slides: Slide[] = SLIDES;
  currentSlideIndex: number;

  constructor() { 
    this.currentSlideIndex = 1;
  }

  ngOnInit() {
  }

  next_slide(){
    this.currentSlideIndex ++;
  }

}
