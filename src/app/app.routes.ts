import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ListaCategoriaComponent } from './categorias/lista-categoria/lista-categoria.component';
import { CadastroUsuarioComponent } from './usuarios/cadastro-usuario/cadastro-usuario.component';
import { ListaJogoComponent } from './jogos/lista-jogo/lista-jogo.component';
import { CadastroJogoComponent } from './jogos/cadastro-jogo/cadastro-jogo.component';
import { GridJogoComponent } from './cliente/jogos/grid/grid-jogo/grid-jogo.component';

export const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "categorias", component: ListaCategoriaComponent },
    { path: "cadastrar", component: CadastroUsuarioComponent },
    { path: "jogos", component: ListaJogoComponent },
    { path: "jogos/cadastro", component: CadastroJogoComponent },
    { path: "grid", component: GridJogoComponent },
    { path: "**", redirectTo: "/login" } // Redirecionar qualquer rota não existente redirecionará para o login 
];
