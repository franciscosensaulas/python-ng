import { Component } from '@angular/core';
import { FiltrosComponent } from '../filtros/filtros/filtros.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { JogoService } from '../../../../services/jogo.service';
import { JogoGrid } from '../../../../models/jogo-grid';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grid-jogo',
  standalone: true,
  imports: [
    FiltrosComponent,
    CardModule,
    ButtonModule,
    CommonModule,
  ],
  templateUrl: './grid-jogo.component.html',
  styleUrl: './grid-jogo.component.css'
})
export class GridJogoComponent {
  jogos!: JogoGrid[];
  constructor(private jogoService: JogoService) { }

  ngOnInit(){
    this.jogoService.obterParaGrid().subscribe({
      next: jogos => this.jogos = jogos,
      error: erro => {
        console.error(erro)
        alert("Erro ao carregar os jogos");
      }
    })
  }
  
}
