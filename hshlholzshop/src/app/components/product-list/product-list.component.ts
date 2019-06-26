import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  tests=['asdf','test','xd']

  constructor() { }
  filter: FormGroup;
  ngOnInit() {
  }
  receiveMessage($event) {
    this.filter = $event;
  }


}
