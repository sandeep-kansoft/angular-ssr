import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (flagName : any, redirectRoute : any) => {
  const authService: AuthService =
  inject(AuthService);
const router: Router = inject(Router);
const isFlagEnabled =  authService.isLoggedIn; 
return isFlagEnabled || router.createUrlTree([redirectRoute]);
};
