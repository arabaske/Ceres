import { Component, OnInit, OnDestroy } from '@angular/core';
import { Slide } from '../models/slide';
import { SliderConfig, SliderTextAlign } from '../models/sliderConfig';
import { COTTAGES_SLIDES } from '../mock-slides';
import { SlideService } from '../slide.service';
import { Observable } from '@firebase/util';

@Component({
  selector: 'app-cottage',
  templateUrl: './cottage.component.html',
  styleUrls: ['./cottage.component.css']
})
export class CottageComponent implements OnInit, OnDestroy {

  cottageSlides: Slide[];
  sliderConfig: SliderConfig;
  slidesCottage$: Observable<Slide[]>;

  private alive: boolean = true;

  constructor(public slideService:SlideService) {

   }

  ngOnInit() {
    this.sliderConfig = {
      textAlign: SliderTextAlign.out_top_left,
      slideAnimation: "///",
      isTextIN:false,
      hasOverlay:true,
      isFullScreen:false
    }

    console.log('Fetching slides...');
    this.getSlides();
  }

  getSlides(): void {
    this.slideService.getCottageSlide()
    .takeWhile(v => this.alive)
    .subscribe(slides => this.cottageSlides = slides);
  }

  public ngOnDestroy() {
    console.log('Destroy component slide-list');
    this.alive = false;
  }


}
