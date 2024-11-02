import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadEvent, FileUploadModule } from 'primeng/fileupload';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { NavbarComponent } from '../../navbar/navbar.component';
import { PanelModule } from 'primeng/panel';
import { InputNumberModule } from 'primeng/inputnumber';
import { CommonModule } from '@angular/common';
import { Desenvolvedora } from '../../models/desenvolvedora';
import { Categoria } from '../../models/categoria';
import { PlataformaService } from '../../services/plataforma.service';
import { Plataforma } from '../../models/plataforma';
import { CategoriaService } from '../../services/categoria.service';
import { DesenvolvedoraService } from '../../services/desenvolvedora.service';
import { JogoForm } from '../../models/jogo-form';
import { Router } from '@angular/router';
import { JogoService } from '../../services/jogo.service';

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
  jogoForm: JogoForm;

  desenvolvedoras!: Desenvolvedora[];
  categorias!: Categoria[];
  plataformas!: Plataforma[];

  constructor(
    private plataformaService: PlataformaService,
    private categoriaService: CategoriaService,
    private desenvolvedoraService: DesenvolvedoraService,
    private router: Router,
    private jogoService: JogoService,
  ) {
    this.jogoForm = {
      nome: "",
      desenvolvedora: "",
      classificacao: 0,
      tags: [],
      plataforma: [],
      disponivelVenda: false
    };
  }

  ngOnInit() {
    this.carregarCategorias();
    this.carregarDesenvolvedoras();
    this.carregarPlataformas();
  }

  carregarPlataformas() {
    this.plataformaService.obterTodas().subscribe({
      next: plataformas => this.plataformas = plataformas,
      error: erro => {
        alert("Ocorreu um erro ao carregar as plataformas")
        console.error(erro)
      }
    })
  }

  carregarDesenvolvedoras() {
    this.desenvolvedoraService.obterTodas().subscribe({
      next: desenvolvedoras => this.desenvolvedoras = desenvolvedoras,
      error: erro => {
        alert("Ocorreu um erro ao carregar as desenvolvedoras")
        console.error(erro)
      }
    })
  }

  carregarCategorias() {
    this.categoriaService.obterTodas().subscribe({
      next: categorias => this.categorias = categorias,
      error: erro => {
        alert("Ocorreu um erro ao carregar as categorias")
        console.error(erro)
      }
    })
  }

  salvar() {
    this.jogoService.cadastrar(this.jogoForm).subscribe({
      next: response => {
        this.router.navigate(["/jogos"])
      },
      error: erro => {
        console.error(erro);
        alert("Ocorre um erro inesperado");
      }
    })
  }

  armazenarFoto(event: FileUploadEvent) {
    this.jogoForm.imagem = event.files[0];
  }
}
