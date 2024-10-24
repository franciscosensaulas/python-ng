import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';

interface Endereco{
  uf: string,
  localidade: string,
  bairro: string,
  logradouro: string
}

@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    PasswordModule,
    CalendarModule,
    InputMaskModule,
    PanelModule,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.css'
})
export class CadastroUsuarioComponent {
  nome: string = "";
  cpf: string = "";
  email: string = "";
  senha: string = "";
  dataNascimento: Date = new Date();
  cep: string = "";
  estado: string = "";
  cidade: string = "";
  bairro: string = "";
  logradouro: string = "";

  constructor(private httpClient: HttpClient, private messageService: MessageService){
  }

  buscarEndereco(){
    let cep = this.cep.replace("-", "").replace("_", "").replace(".", "")

    if (cep.length != 8){
      this.messageService.clear();
      this.messageService.add({summary: "CEP inválido", severity: "error"})
      return;
    }
    this.httpClient.get<Endereco>(`https://viacep.com.br/ws/${cep}/json/`)
      .subscribe(res => {
        this.estado = res.uf;
        this.cidade = res.localidade;
        this.logradouro = res.logradouro;
        this.bairro = res.bairro;
      })
  }

  cadastrar(){
    this.buscarEndereco();
  }
}