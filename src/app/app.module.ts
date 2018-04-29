import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


import { FormsModule } from '@angular/forms';

// external libraries
import { CKEditorModule } from 'ng2-ckeditor';

import { AppComponent } from './app.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { HeaderComponent } from './header/header.component';
import { NewsContentComponent } from './news-content/news-content.component';
import { NewsListComponent } from './news-list/news-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdministrationComponent } from './administration/administration.component';
import { SlideComponent } from './slide/slide.component';
import { SlideListComponent } from './slide-list/slide-list.component';
import { ShellComponent } from './shell/shell.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

import { AgmCoreModule } from '@agm/core';
import { ReservationComponent } from './reservation/reservation.component';
import { CottageComponent } from './cottage/cottage.component';
import { SlideService } from './slide.service';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerService } from './spinner.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoggingService } from './logging.service';
import { ReservationsCalendarComponent } from './reservations-calendar/reservations-calendar.component';
import { ReservationsListComponent } from './reservations-list/reservations-list.component';
import { ReservationItemComponent } from './reservation-item/reservation-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdministrationComponent,
    SlideComponent,
    SlideListComponent,
    ShellComponent,
    NavigationBarComponent,
    ReservationComponent,
    CottageComponent,
    ReservationFormComponent,
    SpinnerComponent,
    PageNotFoundComponent,
    ReservationsCalendarComponent,
    ReservationsListComponent,
    ReservationsListComponent,
    ReservationsCalendarComponent,
    ReservationItemComponent,
    ReservationItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CKEditorModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBGsEOpFN7riegZF2JW6HdhWzv24sOo1ew'
    }),
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [SlideService, SpinnerService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
