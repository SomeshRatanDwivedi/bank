import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-leftnavbar',
  templateUrl: './leftnavbar.component.html',
  styleUrls: ['./leftnavbar.component.css']
})
export class LeftnavbarComponent implements OnInit {

  constructor( private router:Router) { }
  selectedComponent:string=""
  openHome(){
   this.router.navigate(["/working"])
  }
  openCollection(){

  }
  openRecovery(){

  }
  openCompaign(){

  }
  openProduct(){

  }
  openQueries(){

  }
  openUserManager(){

  }

  ngOnInit(): void {
  }

}
