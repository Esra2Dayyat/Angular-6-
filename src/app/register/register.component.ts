import { Component, OnInit } from '@angular/core';
import  { Register} from '../register' ;
import {  ScanverfyService}from '../scanverfy.service' ;
import { Country } from '../country' ;
import {  Router} from '@angular/router'
import { 
    FormGroup,
  FormControl,
  Validators,
  AbstractControl, 
  FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  getcountry: Country []  ; 
  ischanged =false ; 
 message:any[]; 
register :Register ;  
userform ; 

    isok = false; 
    errormessage;
   public isloading :boolean ;
  constructor(  public registerservice:ScanverfyService ,
     private router : Router ) { 
     this.register  =  new Register () ;  

    
  }

//   check() {
//      if (this.register.confirmPassword === this.register.password  )
//     {
//         this.isok = false; 
 
//     }
//     else 
//     {   
//       this.isok = true ; 
//            this.errormessage=" password not equal confirm password  " 


//   }
// }
  RegisterNewUser ()
   { 




       this.isloading =true;
      this.registerservice.register( this.register).subscribe(emp =>{ this.isloading=false ;
        this.router.navigate([ ''] ) ;
    } ,

( error:any) => { this.message=error.error.Error[1]; 
this.isloading= false  }) ;
  
  
  }
 

  ngOnInit() {
    
    this.registerservice.getcountry().subscribe( data =>
      {  this.getcountry = data ; 
       }  );
  }

}
