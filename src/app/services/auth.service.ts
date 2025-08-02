import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of, tap } from 'rxjs';

interface AuthResponse {
  token: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private apiUrl = 'http://localhost:8080/api/auth'; // URL base do backend

  // Signals para gerenciar o estado de autenticação e role
  public isAuthenticated = signal<boolean>(false);
  public userRole = signal<string | null>(null);

  constructor() {
    this.loadAuthStatus();
  }

  private loadAuthStatus(): void {
    const token = localStorage.getItem('auth_token');
    const role = localStorage.getItem('user_role');
    if (token && role) {
      this.isAuthenticated.set(true);
      this.userRole.set(role);
    }
  }

  login(email: string, password: string): Observable<AuthResponse> {
    // TEMPORARY MOCK FOR MANAGER LOGIN (FOR FRONTEND TESTING)
    if (email === 'gerentecleiton' && password === '687-813') {
      const mockResponse: AuthResponse = { token: 'mock-manager-token', role: 'MANAGER' };
      return of(mockResponse).pipe(
        tap(response => {
          localStorage.setItem('auth_token', response.token);
          localStorage.setItem('user_role', response.role);
          this.isAuthenticated.set(true);
          this.userRole.set(response.role);
          console.warn('Frontend Mock Login: Gerente Cleiton logado.');
        })
      );
    }
    // END TEMPORARY MOCK

    // Requisição HTTP POST real para o backend
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap(response => {
        localStorage.setItem('auth_token', response.token);
        localStorage.setItem('user_role', response.role);
        this.isAuthenticated.set(true);
        this.userRole.set(response.role);
      })
    );
  }

  registerUser(userData: any): Observable<any> {
    // Requisição HTTP POST real para o backend
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_role');
    this.isAuthenticated.set(false);
    this.userRole.set(null);
    this.router.navigate(['/login']);
  }

  hasRole(requiredRole: string): boolean {
    return this.userRole() === requiredRole;
  }

  isClient(): boolean {
    return this.userRole() === 'CLIENT';
  }

  isManager(): boolean {
    return this.userRole() === 'MANAGER';
  }
}