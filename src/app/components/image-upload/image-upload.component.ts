import { Component } from '@angular/core';
import { ImageUploadService } from '../../image-upload.service';


@Component({
  selector: 'app-image-upload',
  standalone: true,
  imports: [],
  templateUrl: './image-upload.component.html',
  styleUrl: './image-upload.component.scss'
})
export class ImageUploadComponent {
  selectedFile: File | null = null;

  constructor(private imageUploadService: ImageUploadService) {}

  onImageSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  onUpload(): void {
    if (this.selectedFile) {
      this.imageUploadService.uploadImage(this.selectedFile).subscribe(
        (response) => {
          console.log('Imagen subida correctamente', response);
        },
        (error) => {
          console.error('Error al subir la imagen', error);
        }
      );
    } else {
      console.warn('No se ha seleccionado ninguna imagen');
    }
  }
}
