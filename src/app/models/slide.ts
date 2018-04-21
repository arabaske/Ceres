
export class Slide {
    constructor(public id: number,
        public name: string,
        public url: string,
        public text: string,
        public state = 'right-sided',
        public isLoaded = false) { }

    toCurrent() {
        this.state = 'active';
    }

    toLeft() {
        this.state = 'left-sided';
    }

    toRight() {
        this.state = 'right-sided';
    }

    setLoaded(value: boolean) {
        this.isLoaded = value;
    }
}
