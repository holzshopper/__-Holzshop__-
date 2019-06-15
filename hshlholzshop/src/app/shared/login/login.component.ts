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
    if (this.service.login(email.value, password.value)) {
      this.router.navigate(['/']);
      console.log('Login successfull');
    } else {
      console.log('Unable to login');
    }
  }

  onSubmitRegistration(email: HTMLInputElement, password: HTMLInputElement, password1: HTMLInputElement) {
    if (password.value === password1.value) {
      if (this.validateEmail(email)) {
        if (this.service.emailExists(email.value)) {
          console.log('Email ist bereits registriert');
        } else {
          this.service.registerUser(email.value, password.value);
          console.log('Registrierung erfolgreich');
        }
      } else {
        console.log('Keine korrekte Email');
      }
    } else {
      console.log(' Passwörter stimmen nicht überein');
    }
  }

  validateEmail(email: HTMLInputElement) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
  }
}
