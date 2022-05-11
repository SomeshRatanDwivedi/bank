import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-working',
  templateUrl: './working.component.html',
  styleUrls: ['./working.component.css']
})
export class WorkingComponent implements OnInit {

  constructor() { }
  user:string="user";
  rupee:string="rupee";
  selected:string="user";
  selectedCard:string="";
  onSubmit(ele:string){
    this.selected=ele;
  }
  ngOnInit(): void {
  }

}
