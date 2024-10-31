import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { Input } from '@angular/core';


@Component({
  selector: 'app-schools',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './schools.component.html',
  styleUrl: './schools.component.scss'
})
export class SchoolsComponent {

}
