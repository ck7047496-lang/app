import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Client, ClientService } from '../../services/client.service';
import { CommonModule } from '@angular/common';
import { ClientDashboardService, Loan } from '../../services/client-dashboard.service'; // Caminho corrigido para ../../services

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.html',
  styleUrl: './manager-dashboard.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class ManagerDashboardComponent implements OnInit {
  private clientService = inject(ClientService);
  private clientDashboardService = inject(ClientDashboardService);

  pendingClients = signal<Client[]>([]);
  pendingLoans = signal<Loan[]>([]);

  ngOnInit(): void {
    this.loadPendingClients();
    this.loadPendingLoans();
  }

  loadPendingClients(): void {
    this.clientService.getPendingRegistrations().subscribe({
      next: (clients: Client[]) => {
        this.pendingClients.set(clients);
      },
      error: (err: any) => {
        console.error('Error loading pending clients:', err);
        // TODO: Implementar feedback de erro para o usuário
      }
    });
  }

  approveClient(clientId: number): void {
    this.clientService.approveRegistration(clientId).subscribe({
      next: () => {
        this.loadPendingClients(); // Recarrega a lista após a aprovação
        console.log(`Client ${clientId} approved.`);
      },
      error: (err: any) => {
        console.error(`Error approving client ${clientId}:`, err);
        // TODO: Implementar feedback de erro
      }
    });
  }

  rejectClient(clientId: number): void {
    this.clientService.rejectRegistration(clientId).subscribe({
      next: () => {
        this.loadPendingClients(); // Recarrega a lista após a rejeição
        console.log(`Client ${clientId} rejected.`);
      },
      error: (err: any) => {
        console.error(`Error rejecting client ${clientId}:`, err);
        // TODO: Implementar feedback de erro
      }
    });
  }

  loadPendingLoans(): void {
    this.clientDashboardService.getPendingLoans().subscribe({
      next: (loans: Loan[]) => {
        this.pendingLoans.set(loans);
      },
      error: (err: any) => {
        console.error('Error loading pending loans:', err);
      }
    });
  }

  approveLoan(loanId: number): void {
    this.clientDashboardService.approveLoan(loanId).subscribe({
      next: () => {
        this.loadPendingLoans();
        this.loadPendingClients(); // Pode ser que a aprovação do empréstimo afete o status do cliente
        console.log(`Loan ${loanId} approved.`);
      },
      error: (err: any) => {
        console.error(`Error approving loan ${loanId}:`, err);
      }
    });
  }

  rejectLoan(loanId: number): void {
    this.clientDashboardService.rejectLoan(loanId).subscribe({
      next: () => {
        this.loadPendingLoans();
        console.log(`Loan ${loanId} rejected.`);
      },
      error: (err: any) => {
        console.error(`Error rejecting loan ${loanId}:`, err);
      }
    });
  }
}