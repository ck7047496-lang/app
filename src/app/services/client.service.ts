import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Client {
  id: number;
  name: string;
  email: string;
  cpf: string;
  status: string; // PENDING, APPROVED, REJECTED
  role: string; // CLIENT, MANAGER
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/api/manager'; // URL base do backend para o gerente

  getPendingRegistrations(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiUrl}/pending-registrations`);
  }

  approveRegistration(clientId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/approve-registration/${clientId}`, {});
  }

  rejectRegistration(clientId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/reject-registration/${clientId}`, {});
  }
}