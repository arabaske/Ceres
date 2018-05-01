import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

export class Reservation{

    constructor(
        public firstName: string,
        public LastName: string,
        public email: string,
        public phone: string,
        public fromDate: NgbDateStruct,
        public toDate: NgbDateStruct,
		public additionalInformation:string,
		public status:string = 'new'
    ) { }

    public getData(): object {
        const result = {};
        Object.keys(this).map(key => result[key] = this[key]);
        result["MONTHS_TO_RENDER"] = this.months;
        return result;
	}

    public get months(){
        var map: { [id: string]: boolean; } = {}
        console.debug('FROM:' + this.fromDate.month + " TO:" + this.toDate.month);
		
		// We here add one month before and after in order to display reservations on the 'outside range' of the current month displayed
		var from_d: NgbDateStruct = this.addMonths(this.fromDate, -1);
		var to_d: NgbDateStruct = this.addMonths(this.toDate, 1);
		
		console.debug('FROM:' + from_d.month + " TO:" + to_d.month);
		
		var startingMonth: number;
		//Fill full years if needed
		for(var _y = from_d.year; _y < to_d.year; _y++){
			
			if(_y == from_d.year) {
				startingMonth = from_d.month;
			} else {
				startingMonth = 1;
			}
			 for(var _i = startingMonth; _i <= 12; _i ++){
				map[_y + "_" + _i] = true;
			}
		}

		if(from_d.year == to_d.year){
			startingMonth = from_d.month;
		} else {
			startingMonth = 1
		}
		//Fill difference on toDate year		
		for(var _i = startingMonth; _i <= to_d.month; _i++){
			map[to_d.year + "_" + _i] = true;
		}


        return map;
    }
	
	private addMonths(date: NgbDateStruct, increment: number): NgbDateStruct {
		var result: NgbDateStruct = {day:date.day, month:date.month, year:date.year};
		
		if((date.month + increment) > 12) {
			result.year += Math.floor((date.month + increment) / 12);
			result.month = (date.month + increment) % 12;
		} else if((date.month + increment) < 1) {
			result.year += Math.floor((date.month + increment - 1) / 12);
			result.month = 12 - (date.month + increment + 1) % 12;
		} else {
			result.month += increment;
		}
		
		return result;
	}
}