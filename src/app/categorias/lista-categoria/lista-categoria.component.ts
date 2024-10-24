import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

interface Categoria{
  id: number,
  nome: string
}

@Component({
  selector: 'app-lista-categoria',
  standalone: true,
  imports: [TableModule, ButtonModule, DialogModule, InputTextModule, FormsModule],
  templateUrl: './lista-categoria.component.html',
  styleUrl: './lista-categoria.component.css'
})
export class ListaCategoriaComponent {
  nome: string = "";
  categorias!: Categoria[];
  modalApresentada: boolean = false; 

  ngOnInit(){
    this.categorias = [
      {
        id: 1,
        nome: "RPG"
      }
    ]
  }

  abrirModal(){
    this.modalApresentada = true;
  }
}
