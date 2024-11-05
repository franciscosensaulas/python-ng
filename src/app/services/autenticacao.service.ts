import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient: HttpClient) { }

  autenticar(login: string, senha: string){
    return this.httpClient.post("http://localhost:8000/api/login/", {username: login, password: senha});
  }
}
