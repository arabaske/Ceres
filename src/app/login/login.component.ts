import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';
import { Subject, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {


  private isUserLogged$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(public auth: AuthService, private router: Router) { 
    auth.user.subscribe(user => {
      console.log(user);
      if(user != null){
        router.navigate(['/admin']);
        
      }
      err => console.log(err);
    })
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.isUserLogged$.next(true);
  }

}
