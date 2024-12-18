import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }
  login() {
    this.authService.login(this.username, this.password).subscribe((response: any) => {
      console.log('Respuesta del servidor:', response);
      localStorage.setItem('token', response.token);
      this.router.navigate(['/home']);
    }, (error) => {
      console.error('Error de login:', error);
    });
  }
}

