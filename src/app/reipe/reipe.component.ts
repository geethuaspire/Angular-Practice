import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
@Component({
  selector: 'app-reipe',
  templateUrl: './reipe.component.html',
  styleUrls: ['./reipe.component.scss']
})
export class ReipeComponent implements OnInit {
   recipe:Recipe[]=[
     new Recipe('Abc','this is a hj','https://www.youtube.com/watch?v=qBB_QOZNEdc'),
     new Recipe('Abc','this is a hj','https://www.youtube.com/watch?v=qBB_QOZNEdc')
   ];
  servers:any=[];
  se:boolean=false;
  parentMessage="hello world!";
  childMessage="";
  constructor() { }

  ngOnInit(): void {
  }
  addServ(){
    this.se = true;
    this.servers.push('fhgg','czcc');
  }
  removeSer(id:number){
     const position=id+1;
     this.servers.splice(position,1);
  }


}
