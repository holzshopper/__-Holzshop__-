import { Output, EventEmitter } from '@angular/core';
import { User } from '../models/user';

export class UserService {
  private objects: User[] = [
    new User(1, 'will.kaufen@example.com', 'konsum1!')
  ];

  @Output() changed = new EventEmitter();

  private index(id: number) {
    for (let i = 0; i < this.objects.length; i++) {
      if (this.objects[i].id === id) {
        return i;
      }
    }
    return -1;
  }

  getUserById(id: number): User {
    const index = this.index(id);
    if (index !== -1) {
      return this.objects[index];
    } else {
      return null;
    }
  }

  private indexEmail(email: string) {
    for (let i = 0; i < this.objects.length; i++) {
      if (this.objects[i].email.toUpperCase() === email.toUpperCase()) {
        return i;
      }
    }
    return -1;
  }

  getUserByEmail(email: string): User {
    const index = this.indexEmail(email);
    if (index !== -1) {
      return this.objects[index];
    } else {
      return null;
    }
  }

  checkUserData(email, password) {
    const user = this.getUserByEmail(email);
    if (user != null) {
      if (user.password === password) {
        if (user.can_login) {
          return user;
        } else {
          console.log('Sie sind bereits eingeloggt');
          return null;
        }
      } else {
          console.log('Das eingegebene Passwort ist ungültig');
          return null;
      }
    } else {
      console.log('Diese Emailadresse ist noch nicht registriert');
      return null;
    }
  }

  saveNewUser(obj: User) {
    const index = this.getUserByEmail(obj.email);
    if (index === null) {
      this.objects.push(obj);
    }
    console.log(String(this.objects.length));
    this.changed.emit();
  }

  createUser(email: string, password: string) {
    const id = this.getMaxId();
    let obj = new User(id, email, password);
    this.saveNewUser(obj);
    console.log('Create User used');
  }

  getMaxId() {
    return Math.max.apply(Math, this.objects.map(function(o) {return o.id; })) + 1;
  }
}
