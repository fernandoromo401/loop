import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/auth/login.service';


@Injectable({
  providedIn: 'root'
})
export class GuardTokenGuard implements CanActivate {

  constructor(private authService: LoginService, private router: Router){}

  canActivate(): boolean{
    if (this.authService.loggedIn()) {
      return true;
    }
    this.router.navigate(["login"])
    return false
  }
  
}
