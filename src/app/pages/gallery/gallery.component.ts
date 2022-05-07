import { Component, OnInit } from '@angular/core';
import { GalleryObject } from 'src/app/shared/constants/constants';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  galleryObject: any = GalleryObject;

  constructor() { }

  ngOnInit(): void {
  }

  reload(){}
  

}
