import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  public redirectUrl: string = '';

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post('http://localhost:5195/api/Login/login', 
      {
        UserName: username,
        Password: password
      }, 
      { responseType: 'text' }
    );
  }

  register(user: any) {
    return this.http.post('http://localhost:5195/api/Login/register', 
      user, 
      { responseType: 'text' }
    );
  }
}