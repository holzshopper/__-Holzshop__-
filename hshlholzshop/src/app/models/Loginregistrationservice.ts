import { User } from './user';
import { Injectable } from '@angular/core';
import { UserService } from './userservice';

@Injectable()
export class Loginregistrationservice {
  private current_user: User = null;

  constructor( private service: UserService) {}

  login(email: string, password: string) {
    this.current_user = this.service.checkUserData(email, password);
    return this.isLoggedIn();
  }

  logout() {
    this.current_user = null;
  }

  isLoggedIn() {
    return this.current_user != null;
  }

  emailExists(email: string) {
    return this.service.getUserByEmail(email) !== null;
  }

  registerUser(email: string, password: string) {
    this.service.createUser(email, password);
  }


}
