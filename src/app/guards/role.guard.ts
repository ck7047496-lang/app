import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const expectedRole = route.data['roles'];

  if (authService.isAuthenticated() && authService.hasRole(expectedRole)) {
    return true;
  } else {
    // Redireciona para a página inicial ou uma página de acesso negado
    router.navigate(['/home']);
    return false;
  }
};