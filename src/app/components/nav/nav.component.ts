import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  
  showHamburg(e:any){
    let navLinks:any = document.querySelector(".nav-links");
    let links:any = document.querySelectorAll(".nav-links li");
    navLinks.classList.toggle("open");
    links.forEach((link:any) => {
        link.classList.toggle("fade");
    });
  }
}
