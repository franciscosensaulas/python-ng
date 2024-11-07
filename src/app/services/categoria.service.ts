import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Categoria } from '../models/categoria';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
const apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private httpClient: HttpClient) { }

  obterTodas(): Observable<Categoria[]> {
    return this.httpClient.get<Categoria[]>(`${apiUrl}/categorias/`);
  }

  cadastrar(nome: string): Observable<any> {
    let dados = {
      nome
    }
    return this.httpClient.post(`${apiUrl}/categorias/`, dados);
  }

  apagar(id: number): Observable<any> {
    return this.httpClient.delete(`${apiUrl}/categorias/${id}/`);
  }

  obterPorId(id: number): Observable<Categoria> {
    return this.httpClient.get<Categoria>(`${apiUrl}/categorias/${id}/`);
  }

  editar(id: number, nome: string): Observable<any> {
    let dados = {
      nome
    }
    return this.httpClient.put(`${apiUrl}/categorias/${id}/`, dados);
  }
}
