import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation'
})
export class SalutationPipe implements PipeTransform {

  transform(name: any, gender?: any): any {
    if(gender == 'M'){
       return "Mr."+ name;
    }
    else{
      return "Ms."+ name;
    }
  }

}
