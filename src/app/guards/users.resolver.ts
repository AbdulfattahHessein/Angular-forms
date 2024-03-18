import { inject } from '@angular/core';
import { User, UserService } from '../services/user.service';
import type { ResolveFn } from '@angular/router';

export const usersResolver: ResolveFn<User[]> = (route, state) => {
  const userService = inject(UserService);
  return userService.getAllUsers();
};
