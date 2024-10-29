import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor() { }

  obterTodas() : Observable<Categoria[]>{
    let categorias = [
      { nome: "Ação", id: 1 },
      { nome: "Aventura", id: 2 },
      { nome: "RPG", id: 3 },
      { nome: "Estratégia", id: 4 },
      { nome: "Simulação", id: 5 },
      { nome: "Esporte", id: 6 },
      { nome: "Tiro em Primeira Pessoa", id: 7 },
      { nome: "Plataforma", id: 8 },
      { nome: "Horror", id: 9 },
      { nome: "Multiplayer Online", id: 10 }
    ];
    categorias.sort((a, b) => a.nome.localeCompare(b.nome));
    return of(categorias);
  }
}
