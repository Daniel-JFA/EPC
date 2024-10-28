import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl, AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
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
  loginForm: FormGroup;
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      pass: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }

  // login() {
  //   this.authService.login(this.username, this.password).subscribe((response: any) => {
  //     localStorage.setItem('token', response.token);
  //     this.router.navigate(['/protected']);
  //   }, (error) => {
  //     console.error('Error de login:', error);
  //   });
  // }

  onSubmit() {
    if (this.loginForm.valid) {
      const { name, pass } = this.loginForm.value;

      this.authService.login(name, pass).subscribe(
        (response: any) => {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/home']);
        },
        (error) => {
          console.error('Error de login:', error);
          alert('Error de login. Verifica tus credenciales.');
        }
      );
    } else {
      console.log("Formulario inválido");
    }
  }
}

