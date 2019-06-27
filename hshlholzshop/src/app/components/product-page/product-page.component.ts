import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/Article';
import { CookieService } from 'ngx-cookie-service';

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule, AngularFirestore } from "@angular/fire/firestore";
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {


  private article:Article;
  pTitle="default";
  imagePath="default";
  preisValue="default";
  beschreibungText="default";

  item1Text="Fact";
  item2Text="Fact";
  item3Text="Fact";

  constructor(private cookieService: CookieService) { 

  }
  addToCardClick(){
  this.cookieService.set('ShoppingCard',this.cookieService.get('ShoppingCard')+this.article.id+",");
  this.pTitle=this.cookieService.get('ShoppingCard');
  }
  
  ngOnInit() {
    this.article= new Article();

    this.pTitle=this.article.title;
    this.imagePath=this.article.imgUrl;
    this.preisValue=this.article.preis;
    this.beschreibungText=this.article.beschreibung;
    
  }





}
