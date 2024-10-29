import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Plataforma } from '../models/plataforma';

@Injectable({
  providedIn: 'root'
})
export class PlataformaService {

  constructor() { }

  obterTodas(): Observable<Plataforma[]>{
    let plataformas = [
      {nome: "Nintendo"},
      {nome: "PlayStation"},
      {nome: "Xbox"},
      {nome: "PC"},
      {nome: "Mobile"},
    ]
    plataformas.sort((a, b) => a.nome.localeCompare(b.nome));
    return of(plataformas);
  }
}
