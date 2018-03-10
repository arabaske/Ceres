
export class Slide {
    constructor(public id: number,
        public url: string,
        public text: string,
        public state = 'right-sided') { }

    toCurrent() {
        this.state = 'active';
    }

    toLeft() {
        this.state = 'left-sided';
    }

    toRight() {
        this.state = 'right-sided';
    }
}
