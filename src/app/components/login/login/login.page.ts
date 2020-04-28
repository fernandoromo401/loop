import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user = {
    mail: "",
    pass: ""
  }

  constructor(private authService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  formLogin(){
    let token = this.authService.login(this.user)
    localStorage.setItem('token', token.token)
    this.router.navigate(["/profile"])
  }
}
