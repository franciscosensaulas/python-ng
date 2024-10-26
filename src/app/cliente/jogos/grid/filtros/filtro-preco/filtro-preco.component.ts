import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';

@Component({
  selector: 'app-filtro-preco',
  standalone: true,
  imports: [SliderModule, FormsModule],
  templateUrl: './filtro-preco.component.html',
  styleUrl: './filtro-preco.component.css'
})
export class FiltroPrecoComponent {
  rangeValues: number[] = [20, 80];

  valorMinimo: number = this.rangeValues[0];
  valorMaximo: number = this.rangeValues[1];

  alterarPreco(){
    this.valorMinimo = this.rangeValues[0];
    this.valorMaximo = this.rangeValues[1];
  }
}
