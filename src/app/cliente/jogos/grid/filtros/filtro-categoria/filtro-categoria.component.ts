import { Component } from '@angular/core';
import { Categoria } from '../../../../../models/categoria';
import { CategoriaService } from '../../../../../services/categoria.service';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-filtro-categoria',
  standalone: true,
  imports: [FormsModule, DropdownModule],
  templateUrl: './filtro-categoria.component.html',
  styleUrl: './filtro-categoria.component.css'
})
export class FiltroCategoriaComponent {
  categoriasDisponiveis!: Categoria[];
  categoria!: Categoria;

  constructor(private categoriaService: CategoriaService){
    this.categoriaService.obterTodas().subscribe({
      next: (categorias) => this.categoriasDisponiveis = categorias,
      error: (erro) => {
        alert("Ocorreu um erro ao carregar as categorias")
        console.error(erro)
      }
    });
  }
}
