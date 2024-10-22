import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-componentes',
  standalone: true,
  imports: [
    InputTextModule,
    FormsModule,
    ButtonModule,
    ToastModule,
    PasswordModule,
  ],
  providers: [MessageService],
  templateUrl: './componentes.component.html',
  styleUrl: './componentes.component.css'
})
export class ComponentesComponent {
  login: string = "";
  senha: string = "";

  constructor(private messageService: MessageService) { }

  enviar() {
    if (this.login == "admin" && this.senha == "batatinha") {

    } else {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Login e/ou Senha inválidas' });
    }
  }
}
 