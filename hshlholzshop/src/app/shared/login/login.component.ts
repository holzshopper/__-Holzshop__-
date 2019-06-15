import { Component, OnInit } from '@angular/core';
import { Loginregistrationservice } from 'src/app/models/Loginregistrationservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private service: Loginregistrationservice, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(email: HTMLInputElement, password: HTMLInputElement) {
    console.log(email.value, password.value);
  }

  onSubmitRegistration(email: HTMLInputElement, password: HTMLInputElement, password1: HTMLInputElement) {
    if (password.value === password1.value) {
      console.log('Stimmt');
    } else {
      console.log('Stimmt nicht');
    }
  }
}
