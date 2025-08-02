import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // Reimportado AuthService

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink]
})
export class HeaderComponent {
  private authService = inject(AuthService);

  isAuthenticated = this.authService.isAuthenticated;
  userRole = this.authService.userRole;

  onLogout(): void {
    this.authService.logout();
  }
}