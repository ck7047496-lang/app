import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Loan {
  id: number;
  amount: number;
  installments: number;
  interestRate: number;
  status: string; // PENDING, APPROVED, REJECTED, PAID
  client?: { email: string }; // Adicionado para exibir no dashboard do gerente
}

@Injectable({
  providedIn: 'root'
})
export class ClientDashboardService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/api/client'; // URL base do backend para o cliente
  private managerApiUrl = 'http://localhost:8080/api/manager'; // URL base para endpoints do gerente

  getBalance(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/account/balance`);
  }

  requestLoan(amount: number, installments: number): Observable<Loan> {
    return this.http.post<Loan>(`${this.apiUrl}/loan/request`, { amount, installments });
  }

  getActiveLoan(): Observable<Loan | null> {
    return this.http.get<Loan | null>(`${this.apiUrl}/loan/active`);
  }

  getLoanHistory(): Observable<Loan[]> {
    return this.http.get<Loan[]>(`${this.apiUrl}/loans/history`);
  }

  // Métodos para o gerente (chamadas via ManagerDashboardComponent)
  getPendingLoans(): Observable<Loan[]> {
    return this.http.get<Loan[]>(`${this.managerApiUrl}/loans/pending`);
  }

  approveLoan(loanId: number): Observable<any> {
    return this.http.post(`${this.managerApiUrl}/loan/approve/${loanId}`, {});
  }

  rejectLoan(loanId: number): Observable<any> {
    return this.http.post(`${this.managerApiUrl}/loan/reject/${loanId}`, {});
  }
}