import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
user;
  constructor(private auth: AuthService,
              private router: Router) { 
              this.auth.userLogOn$.subscribe(user => this.user= user)
                
              }

  canActivate(route, state: RouterStateSnapshot):any {
    if (this.user == true) return true;
    
      this.router.navigate(['/login'])
      return false;
    
  }
}