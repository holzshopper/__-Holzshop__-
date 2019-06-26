import { User } from './user';
import { Injectable } from '@angular/core';
import { UserService } from './userservice';
// import * as firebase from 'firebase';

@Injectable()
export class Loginregistrationservice {
  private current_user: User = null;

  constructor( private service: UserService) {}

  login(email: string, password: string) {
    this.current_user = this.service.checkUserData(email, password);
    this.current_user.can_login = false;
    return this.isLoggedIn();
  }

  logout() {
    this.current_user.can_login = true;
    this.current_user = null;
  }

  isLoggedIn() {
    this.current_user.can_login = false;
    return this.current_user != null;
  }

  emailExists(email: string) {
    return this.service.getUserByEmail(email) !== null;
  }

  registerUser(email: string, password: string) {
    this.service.createUser(email, password);
    console.log('Register User used');
  }
}
