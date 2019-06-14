import { User } from '../models/user';

export class Customer extends User {

  constructor(id: number, email: string, password: string) {
    super();
    this.id = id;
    this.email = email;
    this.password = password;
    this.can_login = true;
  }
}
