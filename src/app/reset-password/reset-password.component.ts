import { Component, OnInit } from '@angular/core';
import { ScanverfyService} from '../scanverfy.service' ;
import {  Resetpassword } from "../resetpassword" ; 
import {  Router , ActivatedRoute } from '@angular/router' ;

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  user :Resetpassword;

  constructor( 
    private resetpassword:ScanverfyService ,
      private route: ActivatedRoute,
    private router: Router) {
this.user=new Resetpassword();
this.user.confirmPassword="";
this.user.password="";
this.user.email="";

   }

  ngOnInit() {

    let code = this.route.params.subscribe(data=>{
      
        
            this.user.code = data["code"];
      
            
      
          });
  }


  send ()
  {
    this.resetpassword.ResetPassword(this.user).subscribe();
  }

}
