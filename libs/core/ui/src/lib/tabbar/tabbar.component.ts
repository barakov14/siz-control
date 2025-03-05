import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TuiTabBarComponent,
  TuiTabBarItem,
  TuiTabBarItemDirective,
} from '@taiga-ui/addon-mobile';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'sc-tabbar',
  imports: [
    CommonModule,
    TuiTabBarComponent,
    TuiTabBarItem,
    RouterLink,
    TuiTabBarItemDirective,
    RouterLinkActive,
  ],
  templateUrl: './tabbar.component.html',
  styleUrl: './tabbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabbarComponent {
  protected readonly tabBarItems = [
    {
      name: 'Главная',
      icon: '@tui.house',
      link: 'home',
    },
    {
      name: 'Табель',
      icon: '@tui.clipboard-list',
      link: 'report',
    },
    {
      name: 'Уведомления',
      icon: '@tui.bell',
      link: 'notifications',
    },
    {
      name: 'Профиль',
      icon: '@tui.user',
      link: 'profile',
    },
  ];
}
