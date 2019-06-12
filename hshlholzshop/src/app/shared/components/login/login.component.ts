import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/models/userservice';
import { User } from 'src/app/models/user';
import { AuthenticationService } from '../AuthenticationService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  login(email: string, password: string) {
    let user = this.service.login(email, password);

  }
  onSubmit(email, password) {
    if (this.service.login(email.value, password.value)) {
      console.log(email, password);
    } else {
      console.log('Error');
  }
}
}
