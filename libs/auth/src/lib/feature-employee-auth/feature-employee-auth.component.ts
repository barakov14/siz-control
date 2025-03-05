import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiButton, TuiIcon, TuiLink } from '@taiga-ui/core';
import { TuiInputModule } from '@taiga-ui/legacy';
import { TuiCheckbox } from '@taiga-ui/kit';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TuiRipple } from '@taiga-ui/addon-mobile';

@Component({
  selector: 'sc-feature-employee-auth',
  imports: [
    CommonModule,
    TuiButton,
    TuiInputModule,
    TuiCheckbox,
    TuiIcon,
    TuiLink,
    ReactiveFormsModule,
    TuiRipple,
  ],
  templateUrl: './feature-employee-auth.component.html',
  styleUrl: './feature-employee-auth.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureEmployeeAuthComponent {
  protected readonly rememberMeControl = new FormControl<boolean>(false, {
    nonNullable: true,
  });

  protected readonly authForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
}
