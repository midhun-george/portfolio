import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  selfProjects:any = [
    {"id":"1", "name":"Weather App", "description":"The state of the atmosphere, or weather, can be defined as how hot or cold, wet or dry, quiet or stormy, clear or foggy, etc. This software uses an API to forecast future days in addition to displaying the current weather.", "img":"assets/image/weather.png", "url":'https://midhun-george.github.io/weather/', 'tech':['HTML', 'CSS', 'Javascript']},
    {"id":"2", "name":"Gallery App", "description":"This webpage uses several photos from an API and is responsive. Both a search function and a Load More option will be available in the app.", "img":"assets/image/gallery.png", "url":'https://midhun-george.github.io/gallery/', 'tech':['HTML', 'CSS', 'Javascript']},
    {"id":"3", "name":"Stock Helper", "description":"Anyone can use this app to learn more about the performance of their preferred NSE stock. There are two ways to view the stock performances: tabular and graphical. There are several graph forms available for viewing the results.", "img":"assets/image/stock.png", "url":'https://midhun-george.github.io/MidhuStocks/', 'tech':['HTML', 'CSS', 'Javascript', 'JQuery', 'Chartjs']},
    {"id":"4", "name":"Text to Speech", "description":"The synthetic generation of human voice is known as speech synthesis. A voice synthesizer is a type of computer system that is used for this purpose. This voice synthesizer uses JavaScript, CSS, and HTML.", "img":"assets/image/textToSpeech.png", "url":'https://midhun-george.github.io/text-to-speech/', 'tech':['HTML', 'CSS', 'Javascript', 'JQuery']},
    {"id":"5", "name":"Shopping Kart", "description":"The synthetic generation of human voice is known as speech synthesis. A voice synthesizer is a type of computer system that is used for this purpose. This voice synthesizer uses JavaScript, CSS, and HTML.", "img":"assets/image/textToSpeech.png", "url":'https://midhun-george.github.io/text-to-speech/', 'tech':['HTML', 'CSS', 'Javascript', 'JQuery']},

    ]


    ngOnInit(): void {
      
    }
    showInLive(item:any){
      window.open(item.url);
    }
    getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    
    getBGColor(){
      return this.getRandomColor();
    }
}
