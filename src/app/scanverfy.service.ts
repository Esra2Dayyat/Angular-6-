import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable} from 'rxjs' ; 
import { Country} from './country'
import { Search } from './search';
@Injectable({
  providedIn: 'root'
})
export class ScanverfyService {

  constructor(private http: HttpClient) { }

  Urlgethistory = "http://svnsit.azurewebsites.net/api/VerifyRequests/historybydate";
  
    private getToken(): string {
      let str = localStorage.getItem('auth');
      if (str) {
        let token = JSON.parse(str);
        return token.tokenType + ' ' + token.accessToken;
      } else return null;
    }


    // login Method 

  login( user){
    
    return this.http.post(" http://svnsit.azurewebsites.net/api/Account/Login", user) ; 
    
    
      }
// Register Method
    getcountry( ): Observable <Country[]>{ 
      return  this.http.get <Country[]>('http://svnsit.azurewebsites.net/api/Country/GetAllCountry' ) ;
    
       
    }
    register( newuser){
    return  this.http.post('http://svnsit.azurewebsites.net/api/Account/Registration' , newuser) ;
  
  
    }

    // confirm Method
    confirm ( id:string,code:string  ){
      
           let s= JSON.stringify(id);
           let c= JSON.stringify(code);
      
           return this.http.get( `http://svnsit.azurewebsites.net/api/Account/ConfirmEmail?id=${s}&code =${c}`);
      
          }

          //Forgetpassword Method

          forgetpass (email){

         return this.http.post(" http://svnsit.azurewebsites.net/api/Account/ForgotPassword" , email ) ;
            
            
     
          }

          ResetPassword (  newPassowrd )
          {

            return this.http.post( 'http://svnsit.azurewebsites.net/api/Account/ResetPassword'  , newPassowrd);
          }

    // Get History Method 
  
    search(fromdate, enddate) {
      
        let  httpOption = {
          headers: new HttpHeaders(
            {
              'Content-Type': 'application/json',
              'Authorization': this.getToken()
            })
        }
      
    
        return this.http.get<Search[]>(`${this.Urlgethistory}?from = ${fromdate}&to=${enddate}&pageNo=1&pageSize=20 `,
         httpOption);
        }
        // Verify Method
    
      VerifyByCode(code) {
       
         return  this.http.post('http://svnsit.azurewebsites.net/api/VerifyDoc/VerfiyCodeObject', code )

       }
       
       VerifyByImage (formdata:any) {
        let  httpOption = {
          headers: new HttpHeaders(
            {
              // 'Content-Type': 'application/json',
              'Authorization': this.getToken()
            })
        }
        let url = "http://svnsit.azurewebsites.net/api/VerifyDoc/VerfiyCodeByImages";
    
    
        return this.http.post(url ,formdata,httpOption  ) ;
                   
      }
  
}
