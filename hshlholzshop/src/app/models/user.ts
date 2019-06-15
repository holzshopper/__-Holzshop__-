export class User {
  public id: number;
  public email: string;
  public password: string;
  public can_login: boolean;

  constructor(id: number, email: string, password: string) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.can_login = true;
  }
}
