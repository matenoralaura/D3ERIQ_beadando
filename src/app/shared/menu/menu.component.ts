import { AfterViewInit, Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, AfterViewInit {

  @Output() selectedPage: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
      
  }

  menuSwitch(pageValue: string){
    this.selectedPage.emit(pageValue);
  }

}
