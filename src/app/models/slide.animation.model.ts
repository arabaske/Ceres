import { Slide } from './slide';

export class SlideAnimationModel {
    public fromSlideID: number;
    public toSlideID: number;
    public isBeingAnimated = false;

    isSlideIncluded(slide: Slide): boolean {
        return ((slide.id === this.fromSlideID) || (slide.id === this.toSlideID));
    }
}
