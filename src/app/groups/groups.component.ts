import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.scss'
})
export class GroupsComponent {
  estudiantes = [
    {
      nombre: 'Juliana',
      documento: 'CC',
      zona: '001'
    },
    {
      nombre: 'Mario',
      documento: 'TI',
      zona: '001'
    },
    {
      nombre: 'Matias',
      documento: 'TI',
      zona: '008'
    },
    {
      nombre: 'Jackeline',
      documento: 'CC',
      zona: '004'
    },
    {
      nombre: 'Jackeline',
      documento: 'CC',
      zona: '004'
    },
  ]
}
