import { Component } from '@angular/core';
import { JogoService } from '../../../services/jogo.service';
import { ChartModule } from 'primeng/chart';
import { JogoGrafico } from '../../../models/jogo-grafico';

@Component({
  selector: 'app-graficos',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './graficos.component.html',
  styleUrl: './graficos.component.css'
})
export class GraficosComponent {
  data: any;
  chartOptions: any

  constructor(private jogoSerivce: JogoService) { }


  generateColors(num: number): string[] {
    const colors = [];

    for (let index = 0; index < num; index++) {
      colors.push(this.obterCorRandomica());
    }
    return colors;
  }

  obterCorRandomica(): string {
    const opcoes = "0123456789ABCDEF";
    let cor = "#";
    for (let index = 0; index < 6; index++) {
      cor += opcoes[Math.floor(Math.random() * 16)]
    }
    return cor;
  }

  preencherGrafico(categorias: JogoGrafico[]) {
    const rotulos = categorias.map((categoria: JogoGrafico) => categoria.categoria);
    const quantidades = categorias.map((categoria: JogoGrafico) => categoria.quantidade);

    this.data = {
      labels: rotulos,
      datasets: [
        {
          data: quantidades,
          backgroundColor: this.generateColors(rotulos.length),
          hoverBackgroundColor: this.generateColors(rotulos.length)
        }
      ]
    }

    this.chartOptions = {
      plugins: {
        legend: {
          display: true,
          postMessage: 'right'
        }
      }
    }
  }

  ngOnInit(){
    this.jogoSerivce.obterJogoPorCategoria().subscribe({
      next: cateogiras => this.preencherGrafico(cateogiras),
      error: erro => {
        console.error(erro);
        alert("Não foi possível carregar os dados");
      }
    })
  }
}
