import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  
  isMobile = window.innerWidth <= 1023;
  ipAddress:any='';
  adminIP = '85.255.236.143'
  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        console.log(data.ip);
        this.ipAddress = data.ip;
    })
    .catch(error => {
        console.log('Error:', error);
    });
  }
  hideMenu() {
    if (window.innerWidth <= 1023) {
        $("input").prop("checked", "");
      
    }
  }

}
