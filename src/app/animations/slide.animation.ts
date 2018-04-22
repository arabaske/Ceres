import { trigger, animate, transition, style, keyframes, animation} from '@angular/animations';

export const SlideAnim = trigger('slideState', [
    transition('right-sided => active', [
      style({transform: 'translateX(0)'}),
      animate('1000ms ease-in-out', style({transform: 'translateX({{slide_pct_left}})'}))
    ], {params: {slide_pct_left: "-25%"}}),
    transition('active => left-sided', [
      style({transform: 'translateX(0)'}),
      animate('1000ms ease-in-out', style({transform: 'translateX({{slide_pct_left}})'}))
    ], {params: {slide_pct_left: "-25%"}}),
    transition('left-sided => active', [
      style({transform: 'translateX({{slide_pct_left}})'}),
      animate('1000ms ease-in-out', style({transform: 'translateX(0)'}))
    ], {params: {slide_pct_left: "-25%"}}),
    transition('active => right-sided', [
      style({transform: 'translateX({{slide_pct_left}})'}),
      animate('1000ms ease-in-out', style({transform: 'translateX(0)'}))
    ], {params: {slide_pct_left: "-25%"}}),
  ])