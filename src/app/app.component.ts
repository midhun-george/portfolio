import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc, addDoc, collection, getDoc, query, getDocs } from "firebase/firestore";
import { GaService } from './services/ga.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'midhun_portfolio';

  firebaseConfig:any = {
    apiKey: "AIzaSyBHAonDkMlYKot0oXLjwJbE5ap9oi4n2Lc",
    authDomain: "portfolioapp-e26c6.firebaseapp.com",
    projectId: "portfolioapp-e26c6",
    storageBucket: "portfolioapp-e26c6.appspot.com",
    messagingSenderId: "968203103517",
    appId: "1:968203103517:web:7f8ddf8c4f249b4d9845f4"
};
app:any = initializeApp(this.firebaseConfig);
db:any = getFirestore(this.app)
constructor(private gaservice:GaService){}
  ngOnInit(){
    this.saveInteractions();
  }
  saveInteractions(){
    let lat:any = '';
    let lon:any = '';
    let scope =this;
    navigator.geolocation.getCurrentPosition(function(params) {
      lat = params.coords.latitude;
      lon = params.coords.longitude;
      if(lat && lon){
        scope.gaservice.getLocation(lat, lon).subscribe(function(res:any){
         console.log(res);
         if(res){
          let citi = res["city"];
          let locality = res.locality;
          let date = new Date().getTime();
          let user = {"city":citi, "locality":locality, "date":date}
          addDoc(collection(scope.db, "logins"),user).then((res:any)=>{

          });
         }
         
        })
     }else{
      let user = {"city":'permission denied', "locality":'permission denied', "date":new Date().getTime()}
      addDoc(collection(scope.db, "logins"),user).then((res:any)=>{

      });
     }
    })
    

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
