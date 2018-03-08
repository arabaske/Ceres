import { Component, OnInit } from '@angular/core';
import { Slide } from '../models/slide';
import { SLIDES } from '../mock-slides';
import { SliderConfig, SliderTextAlign } from '../models/sliderConfig';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {

  HomeSlides: Slide[] = SLIDES;
  sliderConfig: SliderConfig = {
    textAlign: SliderTextAlign.centered,
    hasOverlay: false,
    isFullScreen: true,
    isTextIN: false,
    slideAnimation: ''
  }
  
  constructor() { 
  }

  ngOnInit() {
  }

}
