import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public mail;
  public pass;
  public state = true
  constructor(private authService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  formLogin(){

 

    let user = {
      mail: this.mail,
      pass: this.pass
    }
    if (this.mail != undefined && this.pass != undefined) {
      console.log(user)
      let token = this.authService.login(user)
      localStorage.setItem('token', token.token)
      this.router.navigate(["/profile"])
    }
    else{
      this.state = false
    }

  }
}
