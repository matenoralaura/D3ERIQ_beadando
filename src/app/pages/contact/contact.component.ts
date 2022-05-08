import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Comment } from '../../shared/models/Comment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  //commentObject: any = {};
  comments: Array<Comment> = [];

  kerdesekForm = this.createForm({
    veznev:'',
    kernev:'',
    kerdes: ''
  })

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  createForm(model: Comment) {
    let formGroup = this.fb.group(model);
    formGroup.get('veznev')?.addValidators([Validators.required])
    formGroup.get('kernev')?.addValidators([Validators.required])
    formGroup.get('kerdes')?.addValidators([Validators.required, Validators.minLength(15)])
    return formGroup;
  }

  addComment(){
    if (this.kerdesekForm.valid){
      if (this.kerdesekForm.get("veznev") && this.kerdesekForm.get("kernev") && this.kerdesekForm.get("kerdes")){
        this.comments.push({...this.kerdesekForm.value});
        //this.router.navigateByUrl('/main')
      }
    }
  }

}
