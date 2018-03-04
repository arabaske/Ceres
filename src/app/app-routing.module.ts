import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsContentComponent } from './news-content/news-content.component';
import { AdministrationComponent } from './administration/administration.component';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ShellComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'news/:id:action', component: NewsContentComponent },
  { path: 'admin', component: AdministrationComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
