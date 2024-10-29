import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { DesenvolvedoraService } from '../../../../../services/desenvolvedora.service';
import { Desenvolvedora } from '../../../../../models/desenvolvedora';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filtro-desenvolvedora',
  standalone: true,
  imports: [FormsModule, CheckboxModule, CommonModule],
  templateUrl: './filtro-desenvolvedora.component.html',
  styleUrl: './filtro-desenvolvedora.component.css'
})
export class FiltroDesenvolvedoraComponent {
  desenvolvedorasDisponiveis!: Desenvolvedora[];
  desenvolvedoras: Desenvolvedora[];

  constructor(private desenvolvedoraService: DesenvolvedoraService){
    this.desenvolvedoraService.obterTodas().subscribe({
      next: (desenvolvedoras) => this.desenvolvedorasDisponiveis = desenvolvedoras,
      error: (erro) => {
        alert("Ocorreu um erro ao carregar as desenvolvedoras")
        console.error(erro)
      }
    });
    
    this.desenvolvedoras = []
  }
}
