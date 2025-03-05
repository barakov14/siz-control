import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { injectContext } from '@taiga-ui/polymorpheus';
import { TuiDialogContext } from '@taiga-ui/core';
import { Staff } from '@sc-client/common/data-access';

@Component({
  selector: 'sc-staff-credentials-dialog',
  imports: [CommonModule],
  templateUrl: './staff-credentials-dialog.component.html',
  styleUrl: './staff-credentials-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StaffCredentialsDialogComponent {
  protected readonly context = injectContext<TuiDialogContext<void, Staff>>();

  get data(): Staff {
    return this.context.data
  }
}
