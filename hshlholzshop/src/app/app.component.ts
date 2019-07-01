import { Component, OnInit, OnChanges } from '@angular/core';
import { Loginregistrationservice } from 'src/app/shared/services/Loginregistrationservice';
import { UserService } from './shared/services/userservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  isLoggedIn = true;
  constructor( private service: Loginregistrationservice) { 
    this.isLoggedIn = this.service.isLoggedIn()
    this.service.changed.subscribe(() =>
      {
      this.isLoggedIn = this.service.isLoggedIn()
      });
  }

  onLogout() {
    this.service.logout()
  }
  

}
