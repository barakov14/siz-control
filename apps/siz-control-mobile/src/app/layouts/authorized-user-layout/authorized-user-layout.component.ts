import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { routeTransitionAnimation } from '@sc-client/config';

@Component({
  selector: 'sc-authorized-user-layouts',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './authorized-user-layout.component.html',
  styleUrl: './authorized-user-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [routeTransitionAnimation],
})
export class AuthorizedUserLayoutComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'] || null;
  }
}
