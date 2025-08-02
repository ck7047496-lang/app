import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.html',
  styleUrl: './client-dashboard.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: []
})
export class ClientDashboardComponent {

}