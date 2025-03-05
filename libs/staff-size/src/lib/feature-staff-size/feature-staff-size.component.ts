import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { AppBarComponent } from '@sc-client/common/ui';
import { TuiTextfield } from '@taiga-ui/core';
import { TuiInputNumber } from '@taiga-ui/kit';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'sc-feature-staff-size',
  imports: [AppBarComponent, TuiInputNumber, TuiTextfield, ReactiveFormsModule],
  templateUrl: './feature-staff-size.component.html',
  styleUrl: './feature-staff-size.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureStaffSizeComponent {
  protected readonly userSizesForm = new FormGroup({
    weight: new FormControl('67', Validators.required),
    height: new FormControl('180', Validators.required),
    cloth: new FormControl('52', Validators.required),
    gloves: new FormControl('12', Validators.required),
    shoes: new FormControl('43', Validators.required),
  });

  protected readonly disabled = signal<boolean>(true);
}
