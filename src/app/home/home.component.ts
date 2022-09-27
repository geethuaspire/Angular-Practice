import { Component, OnInit } from '@angular/core';
import { GetPostService } from '../get-post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   allPost:any;
   isBtnClicked = false;
  constructor(private getpostservice:GetPostService) { }

  ngOnInit(): void {
  }
  isUserClickedBtn(){
    this.isBtnClicked = true;
  }
  isLoggedIn(){
    return localStorage.getItem("loggedIn") === 'true';
  }
  getAllPost(){
    if(this.isLoggedIn()){
      this.getpostservice.getPost()
      .subscribe(data=>{
        this.allPost = data;
      } )
    }
  }

}
