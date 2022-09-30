import { Component, OnInit, ViewChild, ElementRef, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileUploadComponent implements OnInit {
  @ViewChild('fileInput') public fileInput!: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  public onAddFile(event:any): void {
    console.log('>>> File added', event);
  }
}