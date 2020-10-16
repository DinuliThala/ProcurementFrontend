import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: object = null;

  constructor() { }

  storeLoginData(user: object): void {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  // Load User
  loadUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  // Check for the user authenticated or not
  isLoggedIn(): boolean {
    if (localStorage.getItem('user')) {
      const { username, password } = JSON.parse(localStorage.getItem('user'));
      if (username && password && username === 'Admin' && password === '1234') {
        return true;
      }
    }
    return false;
  }

  // Logout User
  logOutUser(): void {
    localStorage.clear();
    this.user = null;
  }

  // Get Authenticated User
  getAuthenticatedUser(): object {
    this.loadUser();
    return this.user;
  }

}
