import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { CardsComponent } from '../components/cards/cards.component';
import { ImageUploadComponent } from '../components/image-upload/image-upload.component';

@Component({
  selector: 'app-evidences',
  standalone: true,
  imports: [HeaderComponent, CardsComponent, ImageUploadComponent],
  templateUrl: './evidences.component.html',
  styleUrl: './evidences.component.scss'
})
export class EvidencesComponent {

}
