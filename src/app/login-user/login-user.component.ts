import { Component, OnInit } from '@angular/core';
import { ScanverfyService }from '../scanverfy.service' ;
import {  User} from '../user' ; 
import { error } from '@angular/compiler/src/util';
import { Event , Router,NavigationStart , NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
   user : User ; 
   message ="" ;
  constructor( private loginservice :ScanverfyService ,  public router : Router) { 
     this.user = new User (); 
     this.user.userName="" ;
     this.user.password="";

  }
  login ()
  {
    this.loginservice.login(this.user).subscribe(data => {
          this.message="success" ;
        localStorage.setItem( 'auth',JSON.stringify(data) );

 
      this.router.navigate([ 'getinput'] ) ;
    
          } ,
    
    error => { this.message=error.error.message }
    ) ;
  
    


  }

  ngOnInit() {
  }

}
