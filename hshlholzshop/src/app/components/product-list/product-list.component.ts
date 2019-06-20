import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  tests=['asdf','test','xd']

  constructor() { }

  ngOnInit() {
  }



}
