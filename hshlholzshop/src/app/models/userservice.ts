import { Output, EventEmitter } from '@angular/core';
import { User } from '../models/user';
import { Customer } from './customer';
import { Admin } from './admit';

export class UserService {
  private objects: User[] = [
    new Customer( 1, 'will.kaufen@example.com', 'konsum1!'),
    new Admin( 2, 'ich.chef@example.com', 'ichchefihrnix1!')
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
    let index = this.index(id);
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
    let index = this.indexEmail(email);
    if (index !== -1) {
      return this.objects[index];
    } else {
      return null;
    }
  }

  checkUserData(email, password) {
    let user = this.getUserByEmail(email);
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
    let index = this.indexEmail(obj.email);
    if (index === null) {
      let new_id = Math.max.apply(Math, this.objects.map(function(o) {return o.id; })) + 1;
      obj.id = new_id;
      this.objects.push(obj);
      console.log('Registrierung erfolgreich');
    } else {
      console.log('Die von Ihnen verwendete Emailadresse existiert bereits');
    }
    this.changed.emit();
  }

}
