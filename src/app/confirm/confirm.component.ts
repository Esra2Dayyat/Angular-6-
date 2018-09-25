import { Component, OnInit } from '@angular/core';
import { ScanverfyService } from '../scanverfy.service' ;
import {  Router , ActivatedRoute } from '@angular/router' ;

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
public id :string ; 
public code :string;



  constructor( private confirmservice :ScanverfyService ,
    private route: ActivatedRoute,
    private router: Router) {
  

 
   }

  ngOnInit() {

    let id = this.route.params.subscribe(data=>{

      this.id = data["id"];
      this.code = data["code"];

      

    });
    
  }


  confirm(){




    this.confirmservice.confirm( this.id,this.code).subscribe   (
        data => { this.router.navigate([ '']) } ,
       error => { this.router.navigate([ ''])  } , 

    );
    alert(this.id);
    alert(this.code);
  }

}
