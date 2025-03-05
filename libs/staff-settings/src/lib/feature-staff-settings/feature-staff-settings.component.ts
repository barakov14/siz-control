import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBarComponent } from '@sc-client/common/ui';
import {
  TUI_DARK_MODE,
  TuiAppearance,
  TuiButton,
  TuiIcon,
  TuiTitle,
} from '@taiga-ui/core';
import { TuiAvatar, TuiSwitch } from '@taiga-ui/kit';
import { TuiRipple } from '@taiga-ui/addon-mobile';
import { TuiCardMedium } from '@taiga-ui/layout';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'sc-feature-staff-settings',
  imports: [
    CommonModule,
    AppBarComponent,
    TuiAvatar,
    TuiRipple,
    TuiTitle,
    TuiButton,
    TuiIcon,
    TuiAppearance,
    TuiSwitch,
    TuiCardMedium,
    ReactiveFormsModule,
  ],
  templateUrl: './feature-staff-settings.component.html',
  styleUrl: './feature-staff-settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureStaffSettingsComponent implements OnInit {
  readonly #destroyRef = inject(DestroyRef);
  protected readonly tuiDark = inject(TUI_DARK_MODE);
  protected readonly darkModeControl = new FormControl(this.tuiDark(), {
    nonNullable: true,
  });

  ngOnInit() {
    this.darkModeControl.valueChanges
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe((value) => {
        this.tuiDark.set(value);
      });
  }
}
