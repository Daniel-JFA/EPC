import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MeetingsListComponent } from './meetings-list/meetings-list.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { EvidencesComponent } from './evidences/evidences.component';
import { SchoolsComponent } from './schools/schools.component';
import { GroupsComponent } from './groups/groups.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'meetings_list', component: MeetingsListComponent },
  { path: 'attendance/:id', component: AttendanceComponent },
  { path: 'evidences/:id', component: EvidencesComponent },
  { path: 'schools', component: SchoolsComponent },
  { path: 'groups', component: GroupsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];


