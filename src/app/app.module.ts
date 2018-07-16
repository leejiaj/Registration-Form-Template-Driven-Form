import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//import { BotDetectCaptchaModule } from 'angular-captcha';
import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

import { AppComponent } from './app.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RegisterFormValidateOnSubmitComponent } from './register-form-validate-on-submit/register-form-validate-on-submit.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    RegisterFormValidateOnSubmitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RecaptchaModule.forRoot()
  ],
  providers: [{
    provide: RECAPTCHA_SETTINGS,
    useValue: {
      siteKey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
    } as RecaptchaSettings,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }


// add to imports
//     BotDetectCaptchaModule.forRoot({
//       captchaEndpoint: '/bdc4-simple-api-angular-captcha-example/botdetectcaptcha',
//     })