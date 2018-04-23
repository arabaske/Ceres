import { Injectable, isDevMode  } from '@angular/core';

@Injectable()
export class LoggingService {

  constructor() { }
  
  log(message: string){
	if(isDevMode()) {
		console.log(message);
	}
  }

}
