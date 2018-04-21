import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Slide} from './models/slide';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const slides: Slide[] = [
    new Slide(0, 'shell_0', 'assets/images/bg_001.jpg', ''),
    new Slide(1, 'shell_1', 'assets/images/interieur_1.jpg', '')
  ];
  
    const COTTAGE_SLIDES : Slide[] = [
    new Slide(0, 'cott_0', 'assets/images/interieur_1.jpg', 'Content of slide 1'),
    new Slide(1, 'cott_1', 'assets/images/interieur_2.jpg', 'Content of slide 2'),
    new Slide(2, 'cott_2', 'assets/images/interieur_1.jpg', 'Content of slide 3'),
    new Slide(3, 'cott_3', 'assets/images/interieur_2.jpg', 'Content of slide 4')
  ];
    return {slides};
  }
}
