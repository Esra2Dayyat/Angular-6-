import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {  FormsModule }  from "@angular/forms" ;
import { HttpClientModule} from '@angular/common/http';
import {confirmequalvalidatorDirective  } from './confirm-equal-validator.directive';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './/app-routing.module';
import { ScanverfyService } from './scanverfy.service';

 
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component' ;
import { LoginUserComponent } from './login-user/login-user.component';
import { HistoryComponent } from './history/history.component';
import { GetinputComponent } from './getinput/getinput.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent,
    HistoryComponent,
    GetinputComponent ,
    RegisterComponent,
    ConfirmComponent,
    ForgetpasswordComponent,
    ResetPasswordComponent, 
    confirmequalvalidatorDirective 
  ],
  imports: [
    BrowserModule , 
    FormsModule , 
    HttpClientModule , 
    ReactiveFormsModule , 
  AppRoutingModule ,

  ],
  providers: [  ScanverfyService],

  bootstrap: [AppComponent]
})
export class AppModule { }
