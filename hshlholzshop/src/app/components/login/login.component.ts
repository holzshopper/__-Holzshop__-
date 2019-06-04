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
    event.preventDefault()
    const data = event.target;
    const email = data.querySelector('#email').value;
    const password = data.querySelector('#password').value;
    console.log(email, password);
  }
}
