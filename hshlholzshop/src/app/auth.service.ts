import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getDetailsFromUser(email, password) {
    return this.http.post('/api/auth.php', {
      email,
      password
    }).subscribe(data => {
      console.log(data, ' wurde eingeben');
    });
  }
}
