import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiDialogService, TuiIcon } from '@taiga-ui/core';
import { TuiRipple } from '@taiga-ui/addon-mobile';
import { HeaderComponent } from '@sc-client/common/ui';
import { PolymorpheusComponent } from '@taiga-ui/polymorpheus';
import { StaffCredentialsDialogComponent } from '../ui/staff-credentials/staff-credentials-dialog.component';
import { defaultIfEmpty, firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';
import { AvailableWarehousesDialogComponent } from '../ui/available-warehouses-dialog/available-warehouses-dialog.component';
import { Warehouse } from '../data-access/models/warehouse';

@Component({
  selector: 'sc-menu-navigator',
  imports: [CommonModule, TuiIcon, TuiRipple, HeaderComponent],
  templateUrl: './menu-navigator.component.html',
  styleUrl: './menu-navigator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuNavigatorComponent {
  readonly #dialogService = inject(TuiDialogService);
  readonly #router = inject(Router);

  protected readonly menuNavigationItems = [
    {
      title: 'Мои данные',
      icon: '@tui.user',
      open: this.openStaffCredentialsDialog.bind(this),
    },
    {
      title: 'Сканирование QR',
      icon: '@tui.scan-qr-code',
      open: this.openQrCodePage.bind(this),
    },
    {
      title: 'Размеры',
      icon: '@tui.ruler',
      open: this.openStaffSizePage.bind(this),
    },
    {
      title: 'Доступные склады',
      icon: '@tui.warehouse',
      open: this.openWarehousesDialog.bind(this),
    },
    {
      title: 'Настройки',
      icon: '@tui.settings',
      open: this.openSettings.bind(this),
    },
  ];

  openStaffCredentialsDialog() {
    firstValueFrom(
      this.#dialogService
        .open(new PolymorpheusComponent(StaffCredentialsDialogComponent), {
          data: {
            firstName: 'Әділхан',
            lastName: 'Бараков',
            patronymic: 'Бекетұлы',
            gender: 'Мужской',
            phone: '+77071862004',
            email: 'adilkhan.barakov@gmail.com',
            serviceNumber: '302444',
          },
        })
        .pipe(defaultIfEmpty(null))
    );
  }

  openQrCodePage() {}

  openStaffSizePage() {
    this.#router.navigate(['/profile/size']);
  }

  openWarehousesDialog() {
    firstValueFrom(
      this.#dialogService
        .open(new PolymorpheusComponent(AvailableWarehousesDialogComponent), {
          data: warehouses,
        })
        .pipe(defaultIfEmpty(null))
    );
  }

  openSettings() {
    this.#router.navigate(['/profile/settings']);
  }
}

export const warehouses: Warehouse[] = [
  {
    id: 'WH-001',
    name: 'Центральный склад',
    location: 'Алматы, ул. Кунаева 145',
    capacity: 50000, // Вместимость в единицах товара
    createdAt: new Date('2020-06-01'),
    updatedAt: new Date(),
  },
  {
    id: 'WH-002',
    name: 'Склад Восток',
    location: 'Усть-Каменогорск, Промышленная зона, д. 7',
    capacity: 30000,
    createdAt: new Date('2021-02-15'),
    updatedAt: new Date(),
  },
  {
    id: 'WH-003',
    name: 'Западный распределительный центр',
    location: 'Атырау, Промзона, ул. Заводская 10',
    capacity: 40000,
    createdAt: new Date('2019-08-20'),
    updatedAt: new Date(),
  },
  {
    id: 'WH-004',
    name: 'Склад Севера',
    location: 'Петропавловск, ул. Логистическая 12',
    capacity: 25000,
    createdAt: new Date('2022-04-10'),
    updatedAt: new Date(),
  },
  {
    id: 'WH-005',
    name: 'Склад Юг',
    location: 'Шымкент, ул. Складская 8',
    capacity: 35000,
    createdAt: new Date('2021-09-05'),
    updatedAt: new Date(),
  },
  {
    id: 'WH-006',
    name: 'Астана Логистик',
    location: 'Астана, Индустриальная зона, 3-й квартал',
    capacity: 60000,
    createdAt: new Date('2018-11-25'),
    updatedAt: new Date(),
  },
];
