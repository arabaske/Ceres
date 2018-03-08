import { Component, OnInit } from '@angular/core';
import { Slide } from '../models/slide';
import { SliderConfig, SliderTextAlign } from '../models/sliderConfig';
import { COTTAGES_SLIDES } from '../mock-slides';
import { SlideService } from '../slide.service';

@Component({
  selector: 'app-cottage',
  templateUrl: './cottage.component.html',
  styleUrls: ['./cottage.component.css']
})
export class CottageComponent implements OnInit {

  cottageSlides: Slide[];
  sliderConfig: SliderConfig;

  constructor(private slideService:SlideService) {

   }

  ngOnInit() {
    this.sliderConfig = {
      textAlign: SliderTextAlign.out_top_left,
      slideAnimation: "///",
      isTextIN:false,
      hasOverlay:true,
      isFullScreen:false
    }

    this.getSlides();
  }

  getSlides(): void {
    this.slideService.getCottageSlide()
    .subscribe(slides => this.cottageSlides = slides);
  }

}
