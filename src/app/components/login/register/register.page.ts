import { Component, OnInit } from '@angular/core';
import { UserClass } from 'src/app/class/user.class';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public user = {
    name: undefined,
    lastName: undefined,
    dni: null,
    mail: undefined,
    career: undefined,
    password: undefined,
    password2: undefined
  }
  public request = {
    fields: 'Todos los campos son obligatorios',
    pass: 'Las contraseñas no coinciden',
    dni: 'Error en el DNI',
    success: 'Los datos se cargaron'
  }
  public state = 0;

  constructor() { 
    
  }

  ngOnInit() {
  }

  signUp(form){
    let user = this.user
    if (user.name != undefined && user.lastName != undefined && user.dni != null && user.mail != undefined && user.career != undefined && user.password != undefined && user.password2 != undefined) {
      if (user.name != "" && user.lastName != "" && user.dni != "" && user.mail != "" && user.career != "" && user.password != "" && user.password2 != "") {
        if (String(user.dni).length == 8 || String(user.dni).length == 7) {
          if (user.password == user.password2) {
            console.log(user)
            this.state = 4
            form.reset()
            console.log(user)
          }
          else{
            console.log(this.request.pass)
            this.state = 1
          }
        }
        else{
          console.log(this.request.dni)
          this.state = 3
        }
      }
      else{
        console.log(this.request.fields)
        this.state = 2
      }
    }
    else{
      console.log(this.request.fields)
      this.state = 2
    }
  }

}
