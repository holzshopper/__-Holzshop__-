import { Injectable } from '@angular/core';
import { UserService } from 'src/app/models/userservice';
import { User } from '../../models/user';

@Injectable()
export class AuthenticationService {
  private current_user: User = null;

  constructor(private service: UserService) { }

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
    return this.current_user != null;
  }
}
