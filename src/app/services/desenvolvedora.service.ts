import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Desenvolvedora } from '../models/desenvolvedora';

@Injectable({
  providedIn: 'root'
})
export class DesenvolvedoraService {

  constructor() { }

  obterTodas(): Observable<Desenvolvedora[]>{
    let desenvolvedoras = [
      { nome: "Naughty Dog" },
      { nome: "Insomniac Games" },
      { nome: "CD Projekt Red" },
      { nome: "Square Enix" },
      { nome: "Ubisoft" },
      { nome: "Epic Games" },
      { nome: "Valve" },
      { nome: "FromSoftware" },
      { nome: "Bungie" },
      { nome: "Rockstar Games" }
    ];
    desenvolvedoras.sort((a, b) => a.nome.localeCompare(b.nome));
    return of(desenvolvedoras);
  }
}
