import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';

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

  constructor(
    // Necessário para poder apresentar mensagem de feeback para o usuário
    private messageService: MessageService,
    // Necessário para poder redirecionar para outra rota
    private router: Router,
  ) { }

  enviar() {
    // Verificar se o login e senha estão corretos
    if (this.login == "admin" && this.senha == "batatinha") {
      // Redirecionar para a tela da home
      this.router.navigate(["/home"])
    } else if (this.login == "gamer" && this.senha == "batatinha") {
      this.router.navigate(["/grid"])
    } else {
      // Apresentar mensagem que o login/senha estão inválidos
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Login e/ou Senha inválidas' });
    }
  }

  redirecionarCadastrar() {
    this.router.navigate(["/cadastrar"])
  }
}
