import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  UserLogin(event) {
    const data = event.data
    const email = data.getElementByID("email")
    const password = data.getElementByID("password")
    console.log(email, password);
  }
}
