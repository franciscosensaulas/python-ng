import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ListaCategoriaComponent } from './categorias/lista-categoria/lista-categoria.component';

export const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "login", component: LoginComponent},
    {path: "categorias", component: ListaCategoriaComponent},
];
