import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormGroup } from '@angular/forms';
import * as firebase from 'firebase/app';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule, AngularFirestore } from "@angular/fire/firestore";
import { environment } from 'src/environments/environment.prod';
import 'firebase/firestore';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {



  ProductIDs = [];

  constructor() { }
  filter: FormGroup;
  ngOnInit() {
  }

  getIDs(test: firebase.firestore.Firestore) {
    var collection;

    if (this.filter.get('Moebelstueck') == null || this.filter.get('Moebelstueck').value == null) {
      collection = test.collection("product");
    }
    else {
      collection = test.collection("product").where('Holzart', '==', this.filter.get('Holzart').value);
      collection = collection.where('Moebelstueck', '==', this.filter.get('Moebelstueck').value);
      //collection = collection.where('Preis', '>=', this.filter.get('PreisMin').value);
      //collection = collection.where('Preis', '<=', this.filter.get('PreisMax').value);
    }

    var _this = this;
    var counter = 0;
    collection.get().then(function (collection) {
      collection.docs.forEach(doc => {
        _this.ProductIDs[counter] = doc.id
        counter++;
      });
    });
  }

  receiveMessage($event) {
    this.filter = $event;



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


    var test3 = firebase.firestore();
    this.getIDs(test3);


  }


}
