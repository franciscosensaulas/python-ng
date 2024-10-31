import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Categoria } from '../models/categoria';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private httpClient: HttpClient) { }

  obterTodas(): Observable<Categoria[]> {
    return this.httpClient.get<Categoria[]>("http://127.0.0.1:8000/api/categorias/");
  }

  cadastrar(nome: string): Observable<any> {
    let dados = {
      nome
    }
    return this.httpClient.post("http://127.0.0.1:8000/api/categorias/", dados);
  }

  apagar(id: number): Observable<any> {
    return this.httpClient.delete(`http://127.0.0.1:8000/api/categorias/${id}/`);
  }

  obterPorId(id: number): Observable<Categoria> {
    return this.httpClient.get<Categoria>(`http://127.0.0.1:8000/api/categorias/${id}/`);
  }

  editar(id: number, nome: string): Observable<any> {
    let dados = {
      nome
    }
    return this.httpClient.put(`http://127.0.0.1:8000/api/categorias/${id}/`, dados);
  }
}
