import { User } from '../models/user';

export class Admin extends User {

  constructor(id: number, email: string, password: string) {
    super();
    this.id = id;
    this.email = email;
    this.password = password;
    this.is_admin = true;
    this.can_login = true;
  }
}
