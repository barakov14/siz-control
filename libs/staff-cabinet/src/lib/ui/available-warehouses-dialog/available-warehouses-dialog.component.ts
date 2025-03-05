import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { injectContext } from '@taiga-ui/polymorpheus';
import { TuiDialogContext } from '@taiga-ui/core';
import { Warehouse } from '../../data-access/models/warehouse';

@Component({
  selector: 'sc-available-warehouses-dialog',
  imports: [CommonModule],
  templateUrl: './available-warehouses-dialog.component.html',
  styleUrl: './available-warehouses-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvailableWarehousesDialogComponent {
  protected readonly context =
    injectContext<TuiDialogContext<void, Warehouse[]>>();

  get data(): Warehouse[] {
    return this.context.data;
  }
}
