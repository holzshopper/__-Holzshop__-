import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-product-mini',
  templateUrl: './product-mini.component.html',
  styleUrls: ['./product-mini.component.scss']
})
export class ProductMiniComponent implements OnInit {
 
  cTitle="";
  imgAlt="article";
  imgSrc="./assets/img/holz.jpg";
  fact1="123";
  fact2="123";
  fact3="preis";
  constructor() { 
    
  }
  
  ngOnInit() {
    this.cTitle="TestTitle";
  }
 




}
