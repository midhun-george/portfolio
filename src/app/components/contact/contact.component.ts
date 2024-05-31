import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc, addDoc, collection, getDoc, query, getDocs } from "firebase/firestore";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  Name:any='';
  Email:any='';
  Phone:any='';
  Message:any='';
  phoneNgModel:any = {};
   firebaseConfig:any = {
    apiKey: "AIzaSyBHAonDkMlYKot0oXLjwJbE5ap9oi4n2Lc",
    authDomain: "portfolioapp-e26c6.firebaseapp.com",
    projectId: "portfolioapp-e26c6",
    storageBucket: "portfolioapp-e26c6.appspot.com",
    messagingSenderId: "968203103517",
    appId: "1:968203103517:web:7f8ddf8c4f249b4d9845f4"
};

constructor(private _snackBar:MatSnackBar){}

// Initialize Firebase
app:any = initializeApp(this.firebaseConfig);
db:any = getFirestore(this.app)
isSubmitted:any = false;
  submitForm() {
    this.isSubmitted = true;
    let contactObj = {
      "name":this.Name,
      "email":this.Email,
      "phone":this.Phone,
      "message":this.Message,
      "date":new Date().getTime()
    }
    if(!this.Name || !this.Phone){
      return;
    }
    addDoc(collection(this.db, "contact"),contactObj).then((res:any)=>{
      if(res){
        this.isSubmitted = false;
        this.Name = '';
        this.Phone = '';
        this.Email = '';
        this.Message = '';
        
        this._snackBar.open("Message sent successfully",'',{
          duration: 3000
        });
      }
    });
  }
}
