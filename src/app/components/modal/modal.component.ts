import { Component } from '@angular/core';
import { SwitchService } from '../../services/switch.service';
import { throwIfEmpty } from 'rxjs';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  constructor(private modalSS: SwitchService){ }

  closeModal(){
    this.modalSS.$modal.emit(false);
  }

  status:number = 0;
}
