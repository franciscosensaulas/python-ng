import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { CategoriaService } from '../../services/categoria.service';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

interface Categoria {
  id: number,
  nome: string
}

@Component({
  selector: 'app-lista-categoria',
  standalone: true,
  imports: [TableModule, ButtonModule, DialogModule, InputTextModule, FormsModule, ToastModule, ConfirmDialogModule,],
  providers: [ConfirmationService, MessageService],
  templateUrl: './lista-categoria.component.html',
  styleUrl: './lista-categoria.component.css'
})
export class ListaCategoriaComponent {
  nome: string = "";
  categorias!: Categoria[];
  modalApresentada: boolean = false;
  idParaEditar!: number | undefined

  constructor(
    private categoriaService: CategoriaService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnInit() {
    this.carregarCategorias();
  }

  private carregarCategorias() {
    this.categoriaService.obterTodas().subscribe({
      next: categorias => this.categorias = categorias,
      error: erro => {
        console.error(erro);
        this.apresentarMensagemErro("Não foi possível carregar a lista de categorias");
      }
    });
  }

  abrirModal() {
    this.modalApresentada = true;
  }

  salvar() {
    if (!this.idParaEditar)
      this.cadastrar();
    else
      this.editar();
  }

  private cadastrar() {
    this.categoriaService.cadastrar(this.nome).subscribe({
      next: () => {
        this.apresentarMensagemSucesso("Cadastrado com sucesso");
        this.modalApresentada = false;
        this.nome = "";
        this.carregarCategorias();
      },
      error: erro => {
        console.error(erro);
        this.apresentarMensagemErro("Erro ao cadastrar categoria");
      }
    });
  }

  private editar() {
    this.categoriaService.editar(this.idParaEditar!, this.nome).subscribe({
      next: () => {
        this.apresentarMensagemSucesso("Editado com sucesso");
        this.modalApresentada = false;
        this.nome = "";
        this.idParaEditar = undefined;
        this.carregarCategorias();
      },
      error: erro => {
        console.error(erro);
        this.apresentarMensagemErro("Erro ao editar categoria");
      }
    });
  }

  confirmacaoExclusao(event: Event, categoria: Categoria) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `Deseja realmente apagar a categoria '${categoria.nome}'?`,
      header: 'Confirmação de exclusão',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: "p-button-danger p-button-text",
      rejectButtonStyleClass: "p-button-text p-button-text",
      acceptIcon: "none",
      rejectIcon: "none",

      accept: () => {
        this.apagar(categoria.id);
      }
    });
  }

  apagar(id: number) {
    this.categoriaService.apagar(id).subscribe({
      next: () => {
        this.apresentarMensagemSucesso("Apagado com sucesso")
        this.carregarCategorias();
      },
      error: erro => {
        console.error(erro);
        this.apresentarMensagemErro("Erro ao apagar categoria")
      }
    })
  }

  apresentarMensagemSucesso(mensagem: string) {
    this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: mensagem });
  }
  apresentarMensagemErro(mensagem: string) {
    this.messageService.add({ severity: 'error', summary: 'Erro', detail: mensagem });
  }

  carregarModalParaEditar(id: number) {
    this.categoriaService.obterPorId(id).subscribe({
      next: categoria => {
        this.nome = categoria.nome
        this.abrirModal()
        this.idParaEditar = id
      },
      error: erro => {
        console.error(erro)
        this.apresentarMensagemErro("Não foi possível carregar a categoria para editar");
      }
    })
  }
}
