import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  
  isMobile = window.innerWidth <= 1023;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    
  }
  hideMenu() {
    if (window.innerWidth <= 1023) {
        $("input").prop("checked", "");
      
    }
  }

}
