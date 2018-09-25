import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginUserComponent} from './login-user/login-user.component' ;
import {ConfirmComponent } from './confirm/confirm.component'

import { HistoryComponent} from './history/history.component';
import { HttpClientModule} from '@angular/common/http'
import { GetinputComponent } from './getinput/getinput.component';
import { RegisterComponent } from './register/register.component' ;
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
 import { ResetPasswordComponent } from './reset-password/reset-password.component';


const routes : Routes = [ 
  { path:'', component:LoginUserComponent } , 
{ path:'history', component:HistoryComponent } ,
{ path:"getinput", component:GetinputComponent } ,
{ path:"register", component:RegisterComponent } ,
 { path :"confirm/:id/:code" , component:ConfirmComponent } ,
 { path:"forgetpassword" ,component:ForgetpasswordComponent } ,
 { path:"resetpassword/:code" ,component:ResetPasswordComponent  } 



]


@NgModule({
  imports: [
    CommonModule, 
    HttpClientModule,
    RouterModule.forRoot ( routes)
  ],
  exports: [ RouterModule ]
  ,

  declarations: []
})
export class AppRoutingModule { }
