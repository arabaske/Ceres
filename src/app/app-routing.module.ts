import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsContentComponent } from './news-content/news-content.component';
import { AdministrationComponent } from './administration/administration.component';
import { ShellComponent } from './shell/shell.component';
import { ReservationComponent } from './reservation/reservation.component';
import { CottageComponent } from './cottage/cottage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/shell', pathMatch: 'full' },
  { path: 'shell', component: ShellComponent},
  { path: 'home', component: DashboardComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'cottage', component: CottageComponent },
  { path: 'admin', component: AdministrationComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
