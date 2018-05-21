import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';
import { Subject, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private isUserLogged$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(public auth: AuthService, private router: Router) { 
    auth.user.takeUntil(this.isUserLogged$).subscribe(user => {
      if(user != null){
        router.navigate(['/admin']);
        this.isUserLogged$.next(true);
        this.isUserLogged$.complete();
      }
      err => console.log(err);
    })
  }

  ngOnInit() {
  }

}
