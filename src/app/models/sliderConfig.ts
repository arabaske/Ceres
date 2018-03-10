export class SliderConfig {
    textAlign: SliderTextAlign;
    slideAnimation: string;
    isTextIN: boolean = ((this.textAlign === SliderTextAlign.out_top_left) || (this.textAlign === SliderTextAlign.out_bottom_left));
    hasOverlay = true;
    isFullScreen = false;
}

export enum SliderTextAlign {
    centered = 1,
    in_top_left = 2,
    in_top_right = 3,
    in_bottom_left = 4,
    in_bottom_right = 5,
    out_top_left = 6,
    out_bottom_left = 7
}
