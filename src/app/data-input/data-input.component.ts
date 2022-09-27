import { Component, OnInit } from '@angular/core';
import { InputOutputService } from '../input-output.service';

@Component({
  selector: 'app-data-input',
  templateUrl: './data-input.component.html',
  styleUrls: ['./data-input.component.scss']
})
export class DataInputComponent implements OnInit {
inputText:any;
  constructor(private inputoutputservice:InputOutputService) { }

  ngOnInit(): void {
  }
  sendData(){
    this.inputoutputservice.raiseDataEmitterEvent(this.inputText);
  }

}
