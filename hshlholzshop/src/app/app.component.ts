import { Component, OnInit } from '@angular/core';
import { Loginregistrationservice } from './models/Loginregistrationservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoggedIn = true;
  constructor(private service: Loginregistrationservice) { }
  ngOnInit(): void {
    this.isLoggedIn = this.service.isLoggedIn()
    console.log(this.isLoggedIn)
  }
  
}
