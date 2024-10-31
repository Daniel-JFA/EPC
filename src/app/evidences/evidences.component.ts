import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { CardsComponent } from '../components/cards/cards.component';
import { ImageUploadComponent } from '../components/image-upload/image-upload.component';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-evidences',
  standalone: true,
  imports: [HeaderComponent, CardsComponent, ImageUploadComponent],
  templateUrl: './evidences.component.html',
  styleUrl: './evidences.component.scss'
})
export class EvidencesComponent {
  constructor(private router: Router) {}

  guardarTodo() {
    Swal.fire({
      icon: "success",
      title: "¡Qué bien!",
      text: "Se guardó la información correctamente",
      confirmButtonColor: '#14B3EE',
      iconColor: '#14B3EE',
      buttonsStyling: true
    })
    this.router.navigate(['/meetings_list'], { replaceUrl: true });
  }
}
