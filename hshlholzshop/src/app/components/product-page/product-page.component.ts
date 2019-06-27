import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/Article';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute } from '@angular/router';

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
  
  id: string;
  

  constructor(private cookieService: CookieService,private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
     
  });
  }
  addToCardClick(){
  this.cookieService.set('ShoppingCard',this.cookieService.get('ShoppingCard')+this.article.id+",");
  }
  
  callback(me:ProductPageComponent,article:Article){
    me.pTitle=article.title;
    me.imagePath=article.imgUrl;
    me.preisValue=article.preis;
    me.beschreibungText=article.beschreibung;
    me.item1Text=article.Abmessungen;
    me.item2Text=article.Holzart;
    me.item3Text=article.Moebelstueck;
  }

  ngOnInit() {
    this.article= new Article(this.id);
    this.article.generateData(this,this.callback)
  }





}
