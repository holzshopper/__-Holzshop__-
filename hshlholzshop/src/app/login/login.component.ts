import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService) { }

  ngOnInit() {
  }

  UserLogin(event) {
    event.preventDefault()
    const data = event.target;
    const email = data.querySelector('#email').value;
    const password = data.querySelector('#password').value;
    console.log(email, password);

    this.Auth.getDetailsFromUser(email, password);
  }
}
