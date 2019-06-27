import * as firebase from 'firebase/app';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule, AngularFirestore } from "@angular/fire/firestore";
import { environment } from 'src/environments/environment.prod';
import 'firebase/firestore';

export class Article {
    public id: string;
    public title:string;
    //public facts:Array<string>;
    public preis:string;
    public beschreibung:string;
    public imgUrl:string;

    ProductIDs=[];

    constructor(id: string="-1") {
  
        this.id = id;
        

    }
     loadData(sender,callback) {
        const firebaseConfig = {
            apiKey: "AIzaSyDOrM9hNNOUR_iDUjYUnZZAw-lKdPSLtWM",
            authDomain: "web-frontends-5d5f6.firebaseapp.com",
            databaseURL: "https://web-frontends-5d5f6.firebaseio.com",
            projectId: "web-frontends-5d5f6",
            storageBucket: "web-frontends-5d5f6.appspot.com",
            messagingSenderId: "699028735290",
            appId: "1:699028735290:web:79da7dd3ccf61fb8"
          };
          if (!firebase.apps.length) 
          firebase.initializeApp(firebaseConfig);
          console.log("Firebase is initialized!");

        var test3=firebase.firestore();
        var _this = this;  
        test3.collection("product").doc(this.id).get().then(function(doc){
            _this.title=doc.get('Title');
            _this.preis=doc.get('Preis');    
            _this.beschreibung=doc.get('Desc'); 
            callback(sender,_this);   
          });
        }

    generateData(sender,callback) {
       
        if(this.id=="-1"){//Default debug article 

            this.title="Kantholz Buche";
            this.preis="Preis: 500";
            //this.facts["Abmessung"]="4cm*4cm*30cm";
           // this.facts["From"]="Rechteckig";
            this.beschreibung="Das ist das beste Kantholz in Deutschland";
            this.imgUrl='./assets/img/holz.jpg';

        }else{
            //Get data fom DataBase ???
            this.loadData(sender,callback);
        }
        this.imgUrl='./assets/img/holz.jpg';

        
    }

  }
  