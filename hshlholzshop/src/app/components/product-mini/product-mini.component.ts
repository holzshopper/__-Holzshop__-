import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/shared/models/Article';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductPageComponent } from '../product-page/product-page.component';
import { CookieService } from 'ngx-cookie-service';



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

  private Router:Router;
  constructor(private cookieService: CookieService,private route: Router) {
    this.Router=route;
  }

  toProduct(){
    this.Router.navigate(['product'], { queryParams: { id: this.id } });
  }
  addToCard(){
    this.cookieService.set('ShoppingCard',this.cookieService.get('ShoppingCard')+this.id+",");
  }

  private test(sender:ProductMiniComponent,Article:Article){
    sender.cTitle=Article.title;
    sender.fact1=Article.Holzart;
    sender.fact2=Article.Abmessungen;
    sender.fact3=Article.preis;
  }

  ngOnInit() {
    var tmp= new Article(this.id);
    tmp.generateData(this,this.test);

  }





}
