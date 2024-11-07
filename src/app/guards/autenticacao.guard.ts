import { CanActivateFn, Router } from '@angular/router';
import { AutenticacaoService } from '../services/autenticacao.service';
import { inject } from '@angular/core';

export const autenticacaoGuard: CanActivateFn = (route, state) => {
  const autentiacacaoService = inject(AutenticacaoService);
  const router = inject(Router);

  if(autentiacacaoService.isAuthenticated()){
    return true;
  }
  router.navigate(['login']);
  return false;
};
