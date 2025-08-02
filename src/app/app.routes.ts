import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { LoginComponent } from './pages/login/login';
import { RegisterComponent } from './pages/register/register'; // Importa RegisterComponent
import { ClientDashboardComponent } from './pages/client-dashboard/client-dashboard';
import { ManagerDashboardComponent } from './pages/manager-dashboard/manager-dashboard';
import { authGuard } from './guards/auth.guard';
import { roleGuard } from './guards/role.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }, // Adiciona rota de cadastro
  { path: 'client-dashboard', component: ClientDashboardComponent, canActivate: [authGuard, roleGuard], data: { roles: 'CLIENT' } },
  { path: 'manager-dashboard', component: ManagerDashboardComponent, canActivate: [authGuard, roleGuard], data: { roles: 'MANAGER' } },
  { path: '**', redirectTo: '' } // Rota curinga para redirecionar para home
];