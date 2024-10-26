import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { TableModule } from 'primeng/table';

interface JogoLista {
  id: number,
  foto: string,
  nome: string,
  preco: number,
  categoria: string,
}
// ng g c jogos/lista-jogo
@Component({
  selector: 'app-lista-jogo',
  standalone: true,
  imports: [
    TableModule,
    ImageModule,
    ButtonModule,
  ],
  templateUrl: './lista-jogo.component.html',
  styleUrl: './lista-jogo.component.css'
})
export class ListaJogoComponent {
  jogos!: JogoLista[];
  // ng g c jogos/cadastro-jogo
  constructor(private router: Router){}

  ngOnInit(){
    this.jogos = [
      {
        id: 1,
        nome: "The Last of Us",
        foto:  "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/01/the-last-of-us-serie.jpg?w=1200&h=1200&crop=1",
        preco: 250.00,
        categoria: "Survivor"
      }
    ]
  }

  acessarCadastro(){
    this.router.navigate(["/jogos/cadastro"]);
  }
}
