export class Reservation{

    constructor(
        public id: number,
        public firstName: string,
        public LastName: string,
        public email: string,
        public phone: string,
        public fromDate: Date,
        public toDate: Date,
        public additionalInformation:string
    ) { }
}