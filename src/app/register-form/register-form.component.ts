import { Component, OnInit } from '@angular/core';
import { Person } from '../person'
// import { CaptchaComponent } from 'angular-captcha';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  /** 
   * BotDetect CAPTCHA component.
   */
 // @ViewChild(CaptchaComponent) captchaComponent: CaptchaComponent;  

  personmodel = new Person('First Name','Last Name','sophie@example.com',1234567890,'passWORD123');

  confirmpass = 'passWORD123';

  //pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";
  pwdPattern = "^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9\d]{8,12}$";

  submitted = false;

  newRegister(){
    this.submitted = true;
  }
  
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }
  constructor() { }

  ngOnInit() {
  }

}
