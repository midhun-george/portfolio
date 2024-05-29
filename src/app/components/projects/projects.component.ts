import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
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
    {"id":"5", "name":"Shopping Kart", "description":"This is an example of an online retail website created with TypeScript and Angular using Material Design and Flex Layout. Data is stored and retrieved via a local JSON server. Need to run npm run server to start the server", "img":"assets/image/ekart.png", "url":'https://midhun-george.github.io/text-to-speech/', 'tech':['Angular', 'CSS', 'Typescript', 'Material']},

    ]
    
    projects:any = [{"name":"airTMD","desc":'A platform for resource sharing, the AirTMD Application offers services and equipment to corporate research institutes, public and private schools, and company accounts in Taiwan.Google and Facebook logins have been implemented. bootstrap and angular were used to implement responsive user interfaces.ensuring compatibility with different browsers. 6 months was the duration.'
    }, {"name":"EVA", "desc":"a mobile and web application for people with dementia. Patients will be given a mobile device, which will answer to their words by selecting from a pre-programmed list of responses. The application's web component was created using Angular, HTML, CSS, and JQuery."},
   {"name":"Glance", "desc":"The Application is an intelligent marketing assistant that helps in gaining insights and finding actionable opportunities from Google Analytics data - All in simple, human language. The site includes a dashboard featuring various charts. The project's foundation was Angular and material design."},
   {"name":"JTB", "desc":"Event Management Application for an MNC. This digital platform simplifies event preparation, coordination, and execution. It includes a number of functions, including scheduling, venue selection, post-event analysis, ticketing, attendee engagement, and event registration. With the use of this software, event planners can streamline their work, handle logistics more effectively, interact with attendees, and evaluate data to improve events in the future. In addition, event management software provides a centralized platform for coordination, lowering manual labor and raising accuracy, all of which contribute to the general effectiveness and success of events.   "}

   ]

    constructor() {
      
    }

    ngOnInit(): void {

    }
    showInLive(item:any){
      window.open(item.url);
    }
    images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);
    
}
