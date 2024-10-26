import { Component } from '@angular/core';
import { FiltroCategoriaComponent } from '../filtro-categoria/filtro-categoria.component';
import { FiltroDesenvolvedoraComponent } from '../filtro-desenvolvedora/filtro-desenvolvedora.component';
import { FiltroPlataformaComponent } from '../filtro-plataforma/filtro-plataforma.component';
import { FiltroPrecoComponent } from '../filtro-preco/filtro-preco.component';
import { FiltroTagComponent } from '../filtro-tag/filtro-tag.component';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-filtros',
  standalone: true,
  imports: [
    FiltroCategoriaComponent,
    FiltroDesenvolvedoraComponent,
    FiltroPlataformaComponent,
    FiltroPrecoComponent,
    FiltroTagComponent,
    AccordionModule,
  ],
  templateUrl: './filtros.component.html',
  styleUrl: './filtros.component.css'
})
export class FiltrosComponent {

}
