import { Component } from '@angular/core';
import Typed from 'typed.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  
  imageURL:any='';
  hamburger = document.querySelector(".hamburger");
  navLinks = document.querySelector(".nav-links");
  links = document.querySelectorAll(".nav-links li");

  constructor(private router:Router){

  }
ngOnInit() {


  let url = this.router["location"]._basePath;
  console.log(url);
  if(url == ''){
    this.imageURL = '../../../../dist/midhun_portfolio/assets/image/midhu.jpg';
  }else{
    this.imageURL = 'assets/image/midhu.jpg';
  }
  const options = {
    strings: [
      'Data<br>Personalisation<br>Real time',
      'Segment<br>Omnichannel<br>Automation',
      'Data Science<br> Personalisation<br>Machine learning'],
    typeSpeed: 100,
    backSpeed: 20,
    showCursor: true,
    cursorChar: '|',
    loop: true
  };
  const typed = new Typed('.typed-element', options);
}

}
