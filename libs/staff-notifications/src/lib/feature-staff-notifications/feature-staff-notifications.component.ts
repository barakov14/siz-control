import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@sc-client/common/ui';

@Component({
  selector: 'lib-feature-staff-notifications',
  imports: [CommonModule, HeaderComponent],
  templateUrl: './feature-staff-notifications.component.html',
  styleUrl: './feature-staff-notifications.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureStaffNotificationsComponent {}
