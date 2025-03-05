import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TabbarComponent } from '@sc-client/core/ui';

@Component({
  selector: 'sc-tab-layout',
  imports: [CommonModule, RouterOutlet, TabbarComponent],
  templateUrl: './tab-layout.component.html',
  styleUrl: './tab-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabLayoutComponent {}
