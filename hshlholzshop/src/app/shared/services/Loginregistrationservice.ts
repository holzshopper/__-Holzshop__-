import { User } from '../models/user';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { UserService } from './userservice';

@Injectable()
export class Loginregistrationservice {
  @Output() changed = new EventEmitter();
  private current_user: User = null;

  constructor( private service: UserService) {}

  login(email: string, password: string) {
    this.current_user = this.service.checkUserData(email, password);
    this.current_user.can_login = false;
    this.changed.emit();
    return this.isLoggedIn();
  }

  logout() {
    this.current_user.can_login = true;
    this.current_user = null;
    this.changed.emit();
    console.log("Logout")
  }

  isLoggedIn() {
    if (this.current_user === null) {
      return false;
    } else {
      this.current_user.can_login = false;
    return (this.current_user !== null);
    }
  }

  emailExists(email: string) {
    return this.service.getUserByEmail(email) !== null;
  }

  registerUser(email: string, password: string) {
    this.service.createUser(email, password);
    console.log('Register User used');
  }
}
