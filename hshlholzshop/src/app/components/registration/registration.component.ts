import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private Auth: AuthService) { }

  ngOnInit() {
  }

  UserRegistration(event) {
    event.preventDefault()
    const data = event.target;
    const email = data.querySelector('#email').value;
    const password = data.querySelector('#password').value;
    const password1 = data.querySelector('#password1').value;
    console.log(email, password, password1);

    this.Auth.getDetailsFromUser(email, password);
  }
}
