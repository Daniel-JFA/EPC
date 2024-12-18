import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { ModalComponent } from '../components/modal/modal.component';
import { SwitchService } from '../services/switch.service';

@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [HeaderComponent, CommonModule, ModalComponent],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.scss'
})
export class GroupsComponent implements OnInit {
  constructor(private modalSS: SwitchService){ }
  modalSwitch:boolean = false;

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

  ngOnInit(){
    this.modalSS.$modal.subscribe((valor) => {this.modalSwitch = valor});
  }

  openModal(){
    this.modalSwitch = true;
  }
}
