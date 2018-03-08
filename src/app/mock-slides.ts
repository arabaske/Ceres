import {Slide} from './models/slide';
import {state} from '@angular/animations';

export const SLIDES: Slide[] = [
    new Slide(0, 'assets/images/bg_001.jpg', ''),
    new Slide(1, 'assets/images/interieur_1.jpg', '')
];

export const COTTAGES_SLIDES: Slide[] = [
    new Slide(0, 'assets/images/interieur_1.jpg', 'Content of slide 1'),
    new Slide(1, 'assets/images/interieur_2.jpg', 'Content of slide 2'),
    new Slide(2, 'assets/images/interieur_1.jpg', 'Content of slide 3'),
    new Slide(3, 'assets/images/interieur_2.jpg', 'Content of slide 4')
];
