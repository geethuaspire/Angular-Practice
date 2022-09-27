import { Component, OnInit } from '@angular/core';
import { InputOutputService } from '../input-output.service';

@Component({
  selector: 'app-data-output',
  templateUrl: './data-output.component.html',
  styleUrls: ['./data-output.component.scss']
})
export class DataOutputComponent implements OnInit {
  outputText:any="";
  constructor(private inputoutputservice:InputOutputService) { }

  ngOnInit(): void {
   this.inputoutputservice.dataEmitter.subscribe((data)=>{
    this.outputText = data;
   })
  }

}
