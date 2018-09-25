import { Validator, AbstractControl , NG_VALIDATORS } from "@angular/forms";
import { Directive, Input } from "@angular/core";



@Directive ({
    selector: '[appconfirmEqualValidator]', 
    providers :[{ 
        provide:NG_VALIDATORS ,
        useExisting : confirmequalvalidatorDirective , 
        multi :true , 

     }]
})

export class confirmequalvalidatorDirective implements Validator {
@Input() appconfirmEqualValidator: string ; 
validate(control:AbstractControl): {[key:string ] :any  } | null {
    const controltocompare = control.parent.get(this.appconfirmEqualValidator); 


    if (controltocompare && controltocompare.value !== control.value )
   
{return  {'notEqual':true } ;}
{ 
return null ; 
}

}



}