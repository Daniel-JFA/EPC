import { Component } from '@angular/core';
import { AttendanceComponent } from '../../attendance/attendance.component';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-attendance-users',
  standalone: true,
  imports: [AttendanceComponent],
  templateUrl: './attendance-users.component.html',
  styleUrl: './attendance-users.component.scss'
})
export class AttendanceUsersComponent {
  @Input() nombreEstudiante: string = "";
}
