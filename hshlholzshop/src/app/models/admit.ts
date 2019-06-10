import { User } from '../models/user';

export class Admin extends User {
  public is_admin: boolean;

  constructor(email: string, password: string) {
    super();
    this.email = email;
    this.password = password;
    this.is_admin = true;
  }
}
