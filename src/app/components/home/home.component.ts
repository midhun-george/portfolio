import { Component } from '@angular/core';
import Typed from 'typed.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

   hamburger = document.querySelector(".hamburger");
navLinks = document.querySelector(".nav-links");
links = document.querySelectorAll(".nav-links li");
ngOnInit() {
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
