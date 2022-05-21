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
    this.router.navigate(["/settle"])
  }
  openRecovery(){
this.router.navigate(["/recovery"])
  }
  openCompaign(){
this.router.navigate(["/compaign"])
  }
  openProduct(){
this.router.navigate(["/product"])
  }
  openQueries(){
this.router.navigate(["/queries"])
  }
  openUserManager(){
this.router.navigate(["/user"])
  }

  ngOnInit(): void {
  }

}
