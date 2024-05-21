import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'midhun_portfolio';
  ngOnInit(){
  //  setInterval(()=>{
  //   this.createBubble();
  //  },500)
  }
  createBubble():any { 
    let section:any = 
      document.querySelector("Section"); 
    const createElement = 
      document.createElement("span"); 
    var size = Math.random() * 60; 

    createElement.style.animation = 
    "animation 6s linear infinite"; 
    createElement.style.width = 180 + size + "px"; 
    createElement.style.height = 180 + size + "px"; 
    createElement.style.left = 
    Math.random() * innerWidth + "px"; 
    section.appendChild(createElement); 

    setTimeout(() => { 
      createElement.remove(); 
    }, 4000); 
  } 
  //
}
