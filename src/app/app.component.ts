import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private auth: AuthService,
              private router: Router,
              private authService: AuthService){

    auth.user$.subscribe(user => {
      if (user) {
        authService.save(user);
        auth.userLogOn.next(true);
        }
      }
    )
  }
 
}
