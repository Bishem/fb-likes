import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {

  private _likes: number;
  
  constructor() { }
  
  get likes() {
    return this._likes;
  }

  set likes(likes: number) {
    this._likes = likes;
  }
  
  ngOnInit() {
    this.likes = 0;
  }
  
  liking() {
    ++this.likes;
    this.updateStatus();
  }
  
  disliking() {
    --this.likes;
    this.updateStatus();
  }

  updateStatus() {
    if (this.likes > 0) {
      document.getElementById("status").setAttribute("style", "background-color: green;");
    } else if (this.likes < 0) {
      document.getElementById("status").setAttribute("style", "background-color: red;");
    } else {
      document.getElementById("status").setAttribute("style", "background-color: none;");
    }
  }
}