import { Component, OnInit, Input } from '@angular/core';
import {animate, state, style, transition, trigger, keyframes} from '@angular/animations';
import { Slide } from '../models/slide';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  animations: [
    trigger(
      'enterAnimation', [
        transition('void => *', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
      ]
    )
  ],
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

  @Input() currentSlideId: number;
  @Input() slide: Slide;

  constructor() {
    // this.currentSlideId = 1;
  }

  ngOnInit() {
  }

}
