import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { CardsComponent } from '../components/cards/cards.component';
import { ImageUploadComponent } from '../components/image-upload/image-upload.component';
import { Router, RouterModule, RouterLinkWithHref, ActivatedRoute } from '@angular/router';
import { Input } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-evidences',
  standalone: true,
  imports: [HeaderComponent, CardsComponent, ImageUploadComponent, RouterLinkWithHref],
  templateUrl: './evidences.component.html',
  styleUrl: './evidences.component.scss'
})
export class EvidencesComponent {
  @Input() id?: string;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

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
