import { Component, OnInit } from '@angular/core';
import { ScanverfyService} from "../scanverfy.service";
import { Email} from '../email';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  email:Email;
  message ;
  constructor(private forgetpasswoord:ScanverfyService) {
     this.email= new Email();
    this.email.email ="";
   }

  ngOnInit() {
  }


sendEmail()
{ this.forgetpasswoord.forgetpass(this.email).subscribe ( (data:any) =>
  this.message= data.message ,
  error => {this.message=error.error.message }
 );
 }
}