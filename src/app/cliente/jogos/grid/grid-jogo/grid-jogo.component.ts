import { Component } from '@angular/core';
import { FiltrosComponent } from '../filtros/filtros/filtros.component';

@Component({
  selector: 'app-grid-jogo',
  standalone: true,
  imports: [
    FiltrosComponent,
  ],
  templateUrl: './grid-jogo.component.html',
  styleUrl: './grid-jogo.component.css'
})
export class GridJogoComponent {

}
