import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClienteCadastro } from '../models/cliente-cadastro';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpClient: HttpClient) { }

  cadastrar(clienteCadastro: ClienteCadastro): Observable<any>{
    return this.httpClient.post(`${apiUrl}/cliente/cadastro/`,{
      user: {
        username: clienteCadastro.username,
        email: clienteCadastro.email,
        password: clienteCadastro.senha
      },
      nome: clienteCadastro.nome,
      cpf: clienteCadastro.cpf,
      cep: clienteCadastro.cep,
      data_nascimento: clienteCadastro.dataNascimento
    })
  }
}
