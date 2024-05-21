import { Component, OnInit , Inject} from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  constructor(public dialog: MatDialog){}
  accentColors:any = ["#FF4136", "#FF851B", "#328484"]
  experiences: any = [{
    "color":"#41516C","timeline": "05/2022 - 12/2023", "org": "Tata Consultancy Services (TCS)", "role": "IT Analyst",
    "roles": ["Refactored old Ext JS modules into Angular 13.", "Collaborated with the back-end development team to build a RESTful API, improving the overall performance of the application and reducing load times by 30%",
      "Optimize applications for maximum speed and scalability.",
      "Presenting UX design concepts to the project stakeholders for review and feedback.",
      "Responsive Design using HTML, SCSS, Bootstrap",
      "Used NGRX for state management.",
      "Implementing UI with Angular Framework.",
      "Active participation in story estimation during spring planning.",
      "Interaction with UI/UX designer to develop the logic for frontend.",
      "Version Control Using Git.",
      "Platform: Angular 13, WebAPIs."
    ], "inlineDesc": "Old Ext JS modules were refactored into Angular 13. submitting UX design proposals for evaluation and comment to the project's stakeholders.taking an active part in spring planning's narrative estimating process.",
    "skills":["Angular","JavaScript", "Typescript","HTML5", "CSS3","jQuery","Bootstrap", "github", "flex layout"]
  },

  {
    "color":"#FBCA3E","timeline": "01/2021 - 05/2022", "org": "EvoluteIQ", "role": "Principal Solution Consultant",
    "roles": ["Gathering and evaluating user requirements with in collaboration with product managers.",
      "Optimize applications for maximum speed and scalability.",
      "Developed web pages with Angular and Angular material Framework.",
      "Implemented Responsive UI Design.",
      "Wrote many Stored Procedures and Views to deal with Data.",
      "Work as part of an agile development team.",
      "Quick and Efficient deliverables.",
      "A part of a 10-member development team, worked hard in developing and maintaining the company’s own product.",
    ], "inlineDesc": "Software items that have been tested and made highly accessible and scalable.Produced proofs of concept for creative, novel ideas. Functional compliance of the company's products was tested. Closely collaborated to define the functional and visual requirements with the product and UX teams.",
    "skills":["Angular","Material","d3","go","JavaScript", "Typescript","HTML5","jsp", "CSS3","jQuery","Bootstrap", "svn"]

  },

  {
    "color":"#E24A68","timeline": "11/2016 - 12/2020", "org": "Quadwave Consulting Private Limited", "role": "Software Engineer",
    "roles": [" Developed and implemented a new Angular-based e-commerce platform, resulting in a 35% increase in sales and a 20% increase in customer retention.",
      "Communicated with external web services to integrate payment gateways resulting in a seamless checkout process and a 25% increase in customer satisfaction.",
      "Implemented Google and Facebook login to the website.",
      "Implemented Responsive UI screens with Angular and Bootstrap.",
      "Ensuring cross browser compatibility.",
      "Managed ERP web application via HTML, CSS, and jQuery.",
      "Interaction with Team Lead, BA to understand the requirement",
      "thoroughly in order to reduce the development error or mistakes.",
      "Consumed APIs to update or display records."
    ], "inlineDesc": "Worked in tandem with the members of the testing and software development teams to design and build reliable solutions that meet the client's needs for functionality, scalability, and performance. evaluated technical solutions that were suggested in light of client needs.",
    "skills":["Angular","Material","d3","JSON","SQL","mySQL","WCF","JavaScript", "Typescript","HTML5", "CSS3","jQuery","Bootstrap"]

  }
  ]

  ngOnInit(){
    
  }
  getAscentCoolor(i:number){
    return this.accentColors[i];
  }
  openDialog(exp:any) {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        experiance: exp,
        disableClose:true
      },
    });
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'experiencePopup.html',
  styleUrls:['./expPopup.css']
  
})
export class DialogDataExampleDialog implements OnInit{
  experienceData:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.experienceData = data;
  }
  ngOnInit(){
    console.log(this.experienceData);
  }
}