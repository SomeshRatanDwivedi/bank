import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settlement',
  templateUrl: './settlement.component.html',
  styleUrls: ['./settlement.component.css']
})
export class SettlementComponent implements OnInit {

  constructor() { }
  settlementList:any[]=[
    {
      "src":"assets/ionic-md-rocket.png",
      "rupee":"3.37 lac",
      "text":"Offers Raised"

    },
    {
      "src":"assets/check.png",
      "rupee":"2.56 lac",
      "text":"Offers Honoured"

    },
    {
      "src":"assets/customerp3.png",
      "rupee":"98 k",
      "text":"Offers Broken"

    },
    {
      "src":"assets/undo-button.png",
      "rupee":"2.15 lac",
      "text":"Offers Re-Negotiated"

    },
    {
      "src":"assets/awesome-user.png",
      "rupee":"3.1 lac",
      "text":"Offers Approved"

    },
    {
      "src":"assets/cross.png",
      "rupee":"36 k",
      "text":"Offers Rejected"

    },
  ]

  ngOnInit(): void {
  }

}
