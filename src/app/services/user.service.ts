import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // create 5 users from type user
  users: User[] = [
    new User(1, 'Taha', 'taha', '123'),
    new User(2, 'Ali', 'ali', '123'),
    new User(3, 'Ahmed', 'ahmed', '123'),
    new User(4, 'Ali', 'ali', '123'),
    new User(5, 'Ahmed', 'ahmed', '123'),
  ];
  constructor() {}

  getAllUsers(): Observable<User[]> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.users);
        // observer.complete();
      }, 5000);
    });
  }
}

export class User {
  id: number;
  name: string;
  username: string;
  password: string;

  constructor(id: number, name: string, username: string, password: string) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.password = password;
  }
}
