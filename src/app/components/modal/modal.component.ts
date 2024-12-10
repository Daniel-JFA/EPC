import { Component } from '@angular/core';
import { SwitchService } from '../../services/switch.service';
import { throwIfEmpty } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  constructor(private modalSS: SwitchService, private router: Router){ }

  registrados: string[] = ["1020102262"]
  documentNumber: string = '';
  errorMessage: string | null = null;

  closeModal(){
    this.modalSS.$modal.emit(false);
  }

  status:number = 0;

  searchDocument(){
    if (this.registrados.includes(this.documentNumber.trim())) {
      this.errorMessage = 'El beneficiario ya existe';
      this.documentNumber = '';
    } else {
      this.errorMessage = null;
      this.router.navigate(['/characterization']);
    }
  }
}
