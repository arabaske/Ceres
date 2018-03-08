
export class Slide {
    constructor(public id: number, public url: string, public text: string, public state = 'inactive') { }

    toggleState() {
        this.state = this.state === 'active' ? 'inactive' : 'active';
    }

    activate() {
        this.state = 'active';
    }

    deactivate() {
        this.state = 'inactive';
    }
}
