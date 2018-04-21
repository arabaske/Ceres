import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {animate, state, style, transition, trigger, keyframes} from '@angular/animations';
import { Slide } from '../models/slide';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})

export class SlideComponent implements OnInit {

  @Input() slide: Slide;
  @Input() isFullScreen = false;

  @Output() onSlideLoaded = new EventEmitter<number>();

  public src: string;
  public showSpinner = true;

  constructor() {
    // this.slide.state = (this.slide.id == this.currentSlideId) ? 'active' : 'inactive';
  }

  ngOnInit() {
    console.log('OnInit ' + this.slide.id);
	
	//Start loading the image asynchonously
	var downloadingImage = new Image();
	
	downloadingImage.onload = () =>{
		this.slide.setLoaded(true);
		this.onSlideLoaded.emit(this.slide.id);
		this.src = downloadingImage.src; 
		this.showSpinner = false;
	};
	
	downloadingImage.src = this.slide.url;
  }


  onLoadStart(){
    console.log('LOAD START');
  }

}
