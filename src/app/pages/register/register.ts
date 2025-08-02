import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  styleUrl: './register.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, RouterLink]
})
export class RegisterComponent implements OnInit {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  registerForm!: FormGroup;
  registrationSuccess = false;

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const userData = this.registerForm.value;
      this.authService.registerUser(userData).subscribe({
        next: () => {
          this.registrationSuccess = true;
          this.registerForm.reset();
        },
        error: (err) => {
          console.error('Registration failed:', err);
          this.registrationSuccess = false; // Garante que a mensagem de sucesso seja resetada em caso de erro
          // TODO: Implementar feedback de erro para o usuário
        }
      });
    }
  }
}