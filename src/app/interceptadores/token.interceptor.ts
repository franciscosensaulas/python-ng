import { HttpInterceptorFn } from '@angular/common/http';
import { AutenticacaoService } from '../services/autenticacao.service';
import { inject } from '@angular/core';
import { environment } from '../environments/environment';

const apiUrl = environment.apiUrl;

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const autenticacaoService: AutenticacaoService = inject(AutenticacaoService);
  const token = autenticacaoService.getToken();
  const isCadastroUsuario = `${apiUrl}/cliente/cadastro/` == req.url ;

  if(token && isCadastroUsuario == true){
    const clonaRequisicao = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
    return next(clonaRequisicao);
  }

  return next(req);
};
