import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  applicationName: string;
  Home: string;
  Cabin: string;
  Reservation: string;

  navbarCollapsed:boolean = true;

  languages = [
    { code: 'en', label: 'English', icon: 'assets/images/english_flag.png'},
    { code: 'se', label: 'Svenska', icon: 'assets/images/swedish_flag.jpg'}
  ];

  constructor(@Inject(LOCALE_ID) protected localeId: string) {
    this.Home = 'Home';
    this.Cabin = 'Cabin';
    this.Reservation = 'Reservation';
    this.applicationName = 'Martines Stuga';
  }

  get currentLanguage(){
    var localToCheck = (this.localeId.length > 2) ? this.localeId.substring(0, 2) : this.localeId;
    var result = null;

    this.languages.forEach(element => {
      if(element.code === localToCheck){
        result = element;
      }
    });

    return result;
  }

  ngOnInit() {
  }

}
