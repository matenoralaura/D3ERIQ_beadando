import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  regForm = new FormGroup({
    email: new FormControl(''),
    jelszo: new FormControl(''),
    jelszo2: new FormControl(''),
    nev: new FormGroup({
      veznev: new FormControl(''),
      keresztnev: new FormControl('')
    })
  });

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.regForm.value);
  }

  goBack() {
    this.location.back();
  }

}
