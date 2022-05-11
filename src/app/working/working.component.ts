import { isNgContainer } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { findIndex } from 'rxjs';

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
  cardDetails=[
    {
      "heading":"Total Accounts",
      "lac":"9.84 Lac",
      "per":"",
      "src":'assets/totalAccounts.png',
      "crore":"4,178.60 Cr",
      "info":"assets/info-d.png"
      

    },
    {
      "heading":"Total Engagement",
      "lac":"8.12 Lac",
      "per":"(81%)",
      "src":"assets/totalEngagement.png",
      "crore":"3,384.67 Cr",
      "info":"assets/info-d.png"

    },
    {
      "heading":"Total Login",
      "lac":"5.90 Lac",
      "per":"(74%)",
      "src":"assets/totalRegistered.png",
      "crore":"2,504.66 Cr",
      "info":"assets/info-d.png"

    },
    {
      "heading":"Digital Paid",
      "lac":"3.38 Lac",
      "per":"(65%)",
      "src":"assets/digitallyPaid.png",
      "crore":"1,628.03 Cr",
      "info":"assets/info-d.png"

    },
    {
      "heading":"Overall Resolved",
      "lac":"5.23 Lac",
      "per":"(52%)",
      "src":"assets/overallResolved.png",
      "crore":"2,172.80 Cr",
      "info":"assets/info-d.png"

    }
  ]
  selectedInCard2:string="Credit Card";
  selectedInCard3:string[]=["Live", "Pre-NPA",  "NPA"];
  selectedInCard4:string="March'21";
  card2=[
    "Credit Card",
    "Loan"
  ]
  card3=[
    "Live",
    "Pre-NPA",
    "NPA"
  ]
  card4=[
    "March'21",
    "April'21",
    "May'21"
  ]
  changeSelectCard3(ele:string){
      let idx=this.selectedInCard3.indexOf(ele);
      if(idx===-1){
        this.selectedInCard3.push(ele);
      }
      else{
        this.selectedInCard3.splice(idx, 1);
      }
    console.log(this.selectedInCard3);
  }
  isContain(ele:string):boolean{
    let idx=this.selectedInCard3.indexOf(ele);
    return idx!=-1;
  }
  onSubmit(ele:string){
    this.selected=ele;
  }
  ngOnInit(): void {
  }

}
