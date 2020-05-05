import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {

  public code;
  public state = true

  constructor() { }

  ngOnInit() {
  }
  
  restorePass(){
    
    if (this.code != undefined) {
      console.log(this.code)
    }
    else{
      this.state = false
    }

  }

}
