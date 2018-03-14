import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


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

@NgModule({
  declarations: [
    AppComponent,
    ActionBarComponent,
    HeaderComponent,
    NewsContentComponent,
    NewsListComponent,
    DashboardComponent,
    AdministrationComponent,
    SlideComponent,
    SlideListComponent,
    ShellComponent,
    NavigationBarComponent,
    ReservationComponent,
    CottageComponent,
    ReservationFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CKEditorModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBGsEOpFN7riegZF2JW6HdhWzv24sOo1ew'
    }),
    NgbModule.forRoot()
  ],
  providers: [SlideService],
  bootstrap: [AppComponent]
})
export class AppModule { }
