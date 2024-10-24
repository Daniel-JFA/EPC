import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.username, this.password).subscribe((response: any) => {
      localStorage.setItem('token', response.token);
      this.router.navigate(['/protected']);
    }, (error) => {
      console.error('Error de login:', error);
    });
  }
}

