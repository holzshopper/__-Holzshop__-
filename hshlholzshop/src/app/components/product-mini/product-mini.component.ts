import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/models/Article';



@Component({
  selector: 'app-product-mini',
  templateUrl: './product-mini.component.html',
  styleUrls: ['./product-mini.component.scss']
})
export class ProductMiniComponent implements OnInit {
 
@Input()id:string;

  cTitle="";
  imgAlt="article";
  imgSrc="./assets/img/holz.jpg";
  fact1="123";
  fact2="123";
  fact3="preis";
  constructor() { 
    
  }
  
  private test(sender:ProductMiniComponent,Article:Article){
    sender.cTitle=Article.title;
  }

  ngOnInit() {
    var tmp= new Article(this.id);
    tmp.generateData(this,this.test);
 
  }
 




}
