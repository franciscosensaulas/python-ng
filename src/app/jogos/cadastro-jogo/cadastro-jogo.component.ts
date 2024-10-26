import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { NavbarComponent } from '../../navbar/navbar.component';
import { PanelModule } from 'primeng/panel';
import { InputNumberModule } from 'primeng/inputnumber';
import { CommonModule } from '@angular/common';

interface Desenvolvedora {
  nome: string
}

interface Categoria {
  nome: string,
  id: number
}

@Component({
  selector: 'app-cadastro-jogo',
  standalone: true,
  imports: [
    InputTextModule,
    InputMaskModule,
    DropdownModule,
    CalendarModule,
    RatingModule,
    ChipsModule,
    FileUploadModule,
    InputTextareaModule,
    CheckboxModule,
    RadioButtonModule,
    ButtonModule,
    FormsModule,
    NavbarComponent,
    PanelModule,
    InputNumberModule,
    CommonModule,
  ],
  templateUrl: './cadastro-jogo.component.html',
  styleUrl: './cadastro-jogo.component.css'
})
export class CadastroJogoComponent {
  nome: string = "";
  preco!: number;
  desenvolvedora: string = "";
  dataLancamento!: Date;
  classificacao: number = 0;
  tags!: string[];
  categoria: string = "";
  imagem: string = "";
  descricao: string = "";
  plataforma!: string[];
  disponivelVenda: boolean = false;

  desenvolvedoras!: Desenvolvedora[];
  categorias!: Categoria[];
  plataformas!: string[];

  ngOnInit() {
    this.desenvolvedoras = [
      { nome: "Naughty Dog" },
      { nome: "Insomniac Games" },
      { nome: "CD Projekt Red" },
      { nome: "Square Enix" },
      { nome: "Ubisoft" },
      { nome: "Epic Games" },
      { nome: "Valve" },
      { nome: "FromSoftware" },
      { nome: "Bungie" },
      { nome: "Rockstar Games" }
    ];

    this.categorias = [
      { nome: "Ação", id: 1 },
      { nome: "Aventura", id: 2 },
      { nome: "RPG", id: 3 },
      { nome: "Estratégia", id: 4 },
      { nome: "Simulação", id: 5 },
      { nome: "Esporte", id: 6 },
      { nome: "Tiro em Primeira Pessoa", id: 7 },
      { nome: "Plataforma", id: 8 },
      { nome: "Horror", id: 9 },
      { nome: "Multiplayer Online", id: 10 }
    ];

    this.plataformas = ["Mobile", "Nintendo", "PC", "PlayStation", "Xbox"]
  }
}
