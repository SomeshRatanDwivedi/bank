import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    this.fillpageButton();
  }
  title = 'bank';
  selectedComponent:string='';
  selectedPart:string='first';
  user:string="user";
  rupee:string="rupee";
  selected:string="user";
  selectedCard:string="";
  selectedInCard2:string="DCP Sole";
  selectedInCard4:string="Jan 1 - Jan 31'2021";
  card2:string[]=[
   "DCP Sole",
   "DCP Sole 1",
   "DCP Sole 2",
   "DCP Sole 3",
  ]
  card4:string[]=[
    "Jan 1 - Jan 31'2021",
    "Feb 1 - Feb 28'2021",
    "March 1 - March 30'2021",
    "April 1 - April 31'2021",
  ]
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
  pages:number[]=[
    10,
    20,
    30
  ];
  selectedPage:number=10;
  selectedSettlement:string="";
 
  settlementArray1:any[]=[{
    SNo: "1",
    TOS: "1,00,000",
    preApproved: "70,000",
    payStartDate: "Jan,1,2021",
    offerAmount: "69,000",
    noOfEmi: "3",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "2",
    TOS: "3,31,451",
    preApproved: "1,15,164",
    payStartDate: "Jan,3,2021",
    offerAmount: "1,50,000",
    noOfEmi: "1",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "3",
    TOS: "2,03,934",
    preApproved: "39,088",
    payStartDate: "Jan,4,2021",
    offerAmount: "16,000",
    noOfEmi: "1",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "4",
    TOS: "1,39,617",
    preApproved: "46,512",
    payStartDate: "Jan,4,2021",
    offerAmount: "45,000",
    noOfEmi: "1",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "5",
    TOS: "64,407",
    preApproved: "18,293",
    payStartDate: "Jan,4,2021",
    offerAmount: "15,000",
    noOfEmi: "1",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "6",
    TOS: "2,05,715",
    preApproved: "15,481",
    payStartDate: "Jan,4,2021",
    offerAmount: "2,500",
    noOfEmi: "1",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "7",
    TOS: "4,86,251",
    preApproved: "47,536",
    payStartDate: "Jan,6,2021",
    offerAmount: "40,000",
    noOfEmi: "2",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "8",
    TOS: "4,22,519",
    preApproved: "22,164",
    payStartDate: "Jan,6,2021",
    offerAmount: "10,000",
    noOfEmi: "1",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "9",
    TOS: "7,75,936",
    preApproved: "1,69,266",
    payStartDate: "Jan,6,2021",
    offerAmount: "70,000",
    noOfEmi: "3",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "10",
    TOS: "64,407",
    preApproved: "18,293",
    payStartDate: "Jan,4,2021",
    offerAmount: "15,000",
    noOfEmi: "1",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "11",
    TOS: "2,05,715",
    preApproved: "15,481",
    payStartDate: "Jan,4,2021",
    offerAmount: "2,500",
    noOfEmi: "1",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "12",
    TOS: "4,86,251",
    preApproved: "47,536",
    payStartDate: "Jan,6,2021",
    offerAmount: "40,000",
    noOfEmi: "2",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "13",
    TOS: "4,22,519",
    preApproved: "22,164",
    payStartDate: "Jan,6,2021",
    offerAmount: "10,000",
    noOfEmi: "1",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "14",
    TOS: "7,75,936",
    preApproved: "1,69,266",
    payStartDate: "Jan,6,2021",
    offerAmount: "70,000",
    noOfEmi: "3",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "15",
    TOS: "4,22,519",
    preApproved: "22,164",
    payStartDate: "Jan,6,2021",
    offerAmount: "10,000",
    noOfEmi: "1",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "16",
    TOS: "7,75,936",
    preApproved: "1,69,266",
    payStartDate: "Jan,6,2021",
    offerAmount: "70,000",
    noOfEmi: "3",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "17",
    TOS: "64,407",
    preApproved: "18,293",
    payStartDate: "Jan,4,2021",
    offerAmount: "15,000",
    noOfEmi: "1",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "18",
    TOS: "2,05,715",
    preApproved: "15,481",
    payStartDate: "Jan,4,2021",
    offerAmount: "2,500",
    noOfEmi: "1",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "19",
    TOS: "4,86,251",
    preApproved: "47,536",
    payStartDate: "Jan,6,2021",
    offerAmount: "40,000",
    noOfEmi: "2",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "20",
    TOS: "4,22,519",
    preApproved: "22,164",
    payStartDate: "Jan,6,2021",
    offerAmount: "10,000",
    noOfEmi: "1",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "21",
    TOS: "7,75,936",
    preApproved: "1,69,266",
    payStartDate: "Jan,6,2021",
    offerAmount: "70,000",
    noOfEmi: "3",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "22",
    TOS: "4,22,519",
    preApproved: "22,164",
    payStartDate: "Jan,6,2021",
    offerAmount: "10,000",
    noOfEmi: "1",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "23",
    TOS: "7,75,936",
    preApproved: "1,69,266",
    payStartDate: "Jan,6,2021",
    offerAmount: "70,000",
    noOfEmi: "3",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "24",
    TOS: "64,407",
    preApproved: "18,293",
    payStartDate: "Jan,4,2021",
    offerAmount: "15,000",
    noOfEmi: "1",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "25",
    TOS: "2,05,715",
    preApproved: "15,481",
    payStartDate: "Jan,4,2021",
    offerAmount: "2,500",
    noOfEmi: "1",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "26",
    TOS: "4,86,251",
    preApproved: "47,536",
    payStartDate: "Jan,6,2021",
    offerAmount: "40,000",
    noOfEmi: "2",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "27",
    TOS: "4,22,519",
    preApproved: "22,164",
    payStartDate: "Jan,6,2021",
    offerAmount: "10,000",
    noOfEmi: "1",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "28",
    TOS: "7,75,936",
    preApproved: "1,69,266",
    payStartDate: "Jan,6,2021",
    offerAmount: "70,000",
    noOfEmi: "3",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "29",
    TOS: "4,22,519",
    preApproved: "22,164",
    payStartDate: "Jan,6,2021",
    offerAmount: "10,000",
    noOfEmi: "1",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}, {
    SNo: "30",
    TOS: "7,75,936",
    preApproved: "1,69,266",
    payStartDate: "Jan,6,2021",
    offerAmount: "70,000",
    noOfEmi: "3",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !1,
    actionDate: "-",
    actionUser: "-",
    offerOpen: !1
}]
 settlementArray2 = [{
    SNo: "1",
    TOS: "4,84,088",
    preApproved: "1,99,719",
    payStartDate: "Jan,1,2021",
    offerAmount: "1,50,000",
    noOfEmi: "1",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !0,
    actionDate: "5 days",
    actionUser: "Abhishek",
    offerOpen: !1
}, {
    SNo: "2",
    TOS: "3,31,451",
    preApproved: "1,15,164",
    payStartDate: "Jan,3,2021",
    offerAmount: "1,50,,000",
    noOfEmi: "1",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !0,
    actionDate: "5 days",
    actionUser: "Shravan",
    offerOpen: !1
}, {
    SNo: "3",
    TOS: "2,03,934",
    preApproved: "39,088",
    payStartDate: "Jan,4,2021",
    offerAmount: "10,000",
    noOfEmi: "1",
    ctsStartDate: "-",
    ctsAmount: "-",
    ctsNoOfEmi: "-",
    status: !0,
    actionDate: "5 days",
    actionUser: "Shivani",
    offerOpen: !1
}];

pageButton:number[]=[];
selectedArray=this.settlementArray1;
sizeOfsettlementArray1:number=this.selectedArray.length;
selectedbtn:number=1;
start:number=this.selectedbtn*this.selectedPage-this.selectedPage+1;
end:number=Math.min(this.start+this.selectedPage-1,this.sizeOfsettlementArray1);
fillpageButton(){
 this.sizeOfsettlementArray1=this.selectedArray.length;
  this.pageButton=[];
  let btn=1;
  for(let i=0; i<this.sizeOfsettlementArray1; i+=this.selectedPage){
    this.pageButton.push(btn);
    btn++;
  }
 
  
}
show(){
    this.start=this.selectedbtn*this.selectedPage-this.selectedPage+1;
    this.end=Math.min(this.start+this.selectedPage-1,this.sizeOfsettlementArray1) ;  
  }



settlementHeading:string[]= ["S.No.", "TOS", "Pre-Approved Offer Amount", "Payment Start Date", "Offer Amount", "No. Of EMI", "Ctr Offer Start Date", "Ctr Amount", "Ctr No. Of EMI", "Status", "Action Date", "Action User"]
}
function show() {
    throw new Error('Function not implemented.');
}

