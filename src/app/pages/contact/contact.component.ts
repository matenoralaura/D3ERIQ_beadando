import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  commentObject: any = {};
  comments: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

  addComment(){
    if (this.commentObject.vezname && this.commentObject.kername && this.commentObject.comment){
      this.comments.push({...this.commentObject});
    }
  }

}
