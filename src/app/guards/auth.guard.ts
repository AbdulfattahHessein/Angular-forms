import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  } else {
    alert('Please login first');
    router.navigate(['/Login'], { queryParams: { returnUrl: state.url } });
    // window.location.href = '/Login';
    return false;
  }
};
