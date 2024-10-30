import { Component, OnInit } from '@angular/core';
import { AttendanceUsersComponent } from '../components/attendance-users/attendance-users.component';
import { HeaderComponent } from '../components/header/header.component';
import { MeetingsListComponent } from '../meetings-list/meetings-list.component';
import { Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [AttendanceUsersComponent, HeaderComponent, MeetingsListComponent],
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.scss'
})
export class AttendanceComponent {
  @Input() id?: string;
  estudiantesPrueba = ['Juliana', 'Daniel', 'Santiago', 'Celeste'];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }
  estudiantePrueba = [
    {
      nombre: 'Juliana',
      documento: '123456789'
    },
    {
      nombre: 'Daniel',
      documento: '682949245'
    },
    {
      nombre: 'Santiago',
      documento: '14694304'
    },
    {
      nombre: 'Celeste',
      documento: '6522165165'
    }
  ]
}
