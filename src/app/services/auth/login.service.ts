import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user = {
    token: "AAAAAAA1"
  }
  constructor() { }

  login(user){
    return this.user
  }

  loggedIn(): boolean{
    return !!localStorage.getItem('token')
  }
}
