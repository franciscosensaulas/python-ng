import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { Password, PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { AutenticacaoService } from '../services/autenticacao.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    InputTextModule,
    FormsModule,
    ButtonModule,
    ToastModule,
    PasswordModule,
    PanelModule,
  ],
  providers: [MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login: string = "";
  senha: string = "";

  @ViewChild('senhaCampo') senhaCampo!: Password;

  constructor(
    // Necessário para poder apresentar mensagem de feeback para o usuário
    private messageService: MessageService,
    // Necessário para poder redirecionar para outra rota
    private router: Router,
    private autenticacaoService: AutenticacaoService,
  ) { }

  enviar() {
    this.autenticacaoService.autenticar(this.login, this.senha).subscribe({
      next: resposta => {
        this.autenticacaoService.salvarToken(resposta.access, resposta.refresh)
        this.router.navigate(["/grid"])
      },
      error: erro => {
        console.error(erro);
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Login e/ou Senha inválidas' });
      }
    })
    // // Verificar se o login e senha estão corretos
    // if (this.login == "admin" && this.senha == "batatinha") {
    //   // Redirecionar para a tela da home
    //   this.router.navigate(["/home"])
    // } else if (this.login == "gamer" && this.senha == "batatinha") {
    //   this.router.navigate(["/grid"])
    // } else {
    //   // Apresentar mensagem que o login/senha estão inválidos
    //   this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Login e/ou Senha inválidas' });
    // }
  }

  redirecionarCadastrar() {
    this.router.navigate(["/cadastrar"])
  }


  focoCampoSenha(){
    this.senhaCampo.input.nativeElement.focus();
  }
}
