import { Component, OnInit, Input } from '@angular/core';
import { Slide } from '../models/slide';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {


  @Input() slide: Slide;
  
  constructor() { 
   
  }

  ngOnInit() {
  }

}
