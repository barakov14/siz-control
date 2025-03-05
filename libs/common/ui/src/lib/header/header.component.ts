import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiAvatar } from '@taiga-ui/kit';
import { TuiRipple } from '@taiga-ui/addon-mobile';

@Component({
  selector: 'sc-header',
  imports: [CommonModule, TuiAvatar, TuiRipple],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
