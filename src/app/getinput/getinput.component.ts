import { Component, OnInit,ElementRef } from '@angular/core';
import {  ScanverfyService} from '../scanverfy.service' ;
import { Code } from '../code';
import { Response} from '../response' ;


@Component({
  selector: 'app-getinput',
  templateUrl: './getinput.component.html',
  styleUrls: ['./getinput.component.css']
})
export class GetinputComponent implements OnInit {
  resultsearch =true;
  code:Code;
  docLang ; 
  docName ; 
  resopnse: Response [];

  downloadpdf ;

  constructor( 
    private  verifyservice:ScanverfyService,
  private element :ElementRef) 
  { 
    this.resopnse=  [ new Response()];
    this.docLang="";
   this.docName =""; 
  this.code= new Code (); 
  this.code.code =""; 
  this.downloadpdf ="";
   }

  scanverify (){
   this.verifyservice.VerifyByCode(this.code).subscribe(
   (data:any)=> {
          this.resultsearch= false ; 
          this.docLang= data.result.docLang ;
          this.docName = data.result.docName;
          this.resopnse=data.result.document;
          this.downloadpdf = data.result.pdf ; 
   
   });
  }
  UploadImage(){
    let files=  this.element.nativeElement.querySelector("#file").files;
      let file =files[0];
      let formData =  new FormData(); 
  
    formData.append("file", file , file.name ); 
    this.verifyservice.VerifyByImage(formData).subscribe(
       (data:any)=> {
        this.resultsearch= false ; 
        this.docLang= data.result.docLang ;
        this.docName = data.result.docName;
        this.resopnse=data.result.document;
        this.downloadpdf = data.result.pdf ; 
 
      console.log( data.result.docLang  )  });

   }


   
 



  

  ngOnInit() {
  }

}
