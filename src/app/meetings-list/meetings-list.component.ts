import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { RouterModule, RouterLinkWithHref } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meetings-list',
  standalone: true,
  imports: [HeaderComponent, RouterModule, RouterLinkWithHref, CommonModule],
  templateUrl: './meetings-list.component.html',
  styleUrl: './meetings-list.component.scss'
})
export class MeetingsListComponent {
  meetings = ['Encuentro 1', 'Encuentro 2', 'Encuentro 3', 'Encuentro 4', 'Encuentro 5', 'Encuentro 6', 'Encuentro 7', 'Encuentro 8', 'Encuentro 9', 'Encuentro 10', 'Encuentro 11', 'Encuentro 12', 'Encuentro 13']
}
