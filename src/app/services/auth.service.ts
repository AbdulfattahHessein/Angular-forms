import { Injectable, inject } from '@angular/core';
import { UserService } from './user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLogged: boolean = false;
  userService: UserService = inject(UserService);
  login(username: string, password: string) {
    let isCorrect = this.userService.users.some(
      (u) => u.username === username && u.password === password
    );

    if (isCorrect) {
      this.isLogged = true;
    }

    return isCorrect;
  }
  logout() {
    this.isLogged = false;
  }
  isAuthenticated() {
    return this.isLogged;
  }
  // register(username: string, password: string) {}

  constructor() {}
}
