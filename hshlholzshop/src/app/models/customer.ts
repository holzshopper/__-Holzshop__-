import { User } from '../models/user';

export class Customer extends User{
  public is_admin: boolean;

  constructor(email: string, password: string) {
    super();
    this.email = email;
    this.password = password;
    this.is_admin = false;
  }
}
