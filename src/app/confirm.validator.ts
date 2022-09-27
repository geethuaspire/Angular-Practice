import { FormControl,FormGroup} from "@angular/forms";

export function ConfirmValidator(controlName:string,matchingControlName:string){
    return (formGroup:FormGroup)=>{
        const password = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if(password.value!==matchingControl.value){
            matchingControl.setErrors({confirmedValidator:true})
            }
            else{
            matchingControl.setErrors(null);
            }
            

        }
    }
