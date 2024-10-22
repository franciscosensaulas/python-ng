import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

interface Categoria{
  id: number,
  nome: string
}

@Component({
  selector: 'app-lista-categoria',
  standalone: true,
  imports: [TableModule],
  templateUrl: './lista-categoria.component.html',
  styleUrl: './lista-categoria.component.css'
})
export class ListaCategoriaComponent {
  categorias!: Categoria[];

  ngOnInit(){
    this.categorias = [
      {
        id: 1,
        nome: "RPG"
      }
    ]
  }
}
