import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { JogoGrid } from '../models/jogo-grid';
import { JogoLista } from '../models/jogo-lista';
import { HttpClient } from '@angular/common/http';
import { JogoForm } from '../models/jogo-form';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  constructor(private httpClient: HttpClient) { }

  obterParaLista(): Observable<JogoLista[]> {
    return this.httpClient.get<JogoLista[]>("http://localhost:8000/api/jogos/");
  }

  obterParaGrid(): Observable<JogoGrid[]> {
    return this.httpClient.get<JogoGrid[]>("http://localhost:8000/api/jogos/");
  }

  cadastrar(jogoForm: JogoForm) {
    let data = new FormData();
    data.append('nome', jogoForm.nome)
    data.append('preco', jogoForm.preco!.toString())
    data.append('desenvolvedora', jogoForm.desenvolvedora)
    data.append('data_lancamento', jogoForm.dataLancamento!.toISOString().slice(0, 10))
    data.append('classificacao_metacritic', jogoForm.classificacao.toString())
    data.append('tags', jogoForm.tags.toString())
    data.append('categoria', jogoForm.categoria!.toString())
    data.append('imagem', jogoForm.imagem!)
    data.append('descricao', jogoForm.descricao!)
    data.append('plataforma', jogoForm.plataforma!.toString())
    data.append('disponivel_venda', jogoForm.disponivelVenda!.toString())


    return this.httpClient.post<any>("http://localhost:8000/api/jogos/", data);
  }
}
