import { CommonModule } from '@angular/common';
import { Component } from '@angular/core'; 
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  items: MenuItem[] | undefined;

    constructor(private router: Router) {}

    ngOnInit() {
        this.items = [
            {
                label: 'Jogos',
                icon: 'pi pi-discord',
                items: [
                    {
                        label: 'Categorias',
                        route: '/categorias'
                    },
                    {
                        label: 'Jogos',
                        route: '/jogos'
                    }
                ]
            },
        ];
    }
}
