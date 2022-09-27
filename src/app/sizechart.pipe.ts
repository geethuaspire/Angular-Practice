import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sizechart'
})
export class SizechartPipe implements PipeTransform {

  transform(value:number): any {
let size=""
    if(value>=28 && value<=30){
          size = 'S';
    }
    else if(value>30 && value<=34){
           size ='M';
    }
    else if(value>34 && value<=38 ){
           size = 'L';
    }
    else if(value>38 && value<=42){
          size="xxL";
    }
    else{
        size="Not Found";
      }
    return size;
  }

}
