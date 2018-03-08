import { Component, OnInit } from '@angular/core';
import { Slide } from '../models/slide';
import { SliderConfig, SliderTextAlign } from '../models/sliderConfig';
import { COTTAGES_SLIDES } from '../mock-slides';

@Component({
  selector: 'app-cottage',
  templateUrl: './cottage.component.html',
  styleUrls: ['./cottage.component.css']
})
export class CottageComponent implements OnInit {

  cottageSlides: Slide[];
  sliderConfig: SliderConfig;

  constructor() {
    this.cottageSlides = COTTAGES_SLIDES;
    this.sliderConfig = {
      textAlign: SliderTextAlign.out_top_left,
      slideAnimation: "///",
      isTextIN:false,
      hasOverlay:true,
      isFullScreen:false
    }
   }

  ngOnInit() {
  }

}
