import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';

//external libraries
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
    SlideListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }