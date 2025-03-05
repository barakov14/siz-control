import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiButton, TuiIcon, TuiLink } from '@taiga-ui/core';
import { TuiRipple } from '@taiga-ui/addon-mobile';

@Component({
  selector: 'sc-feature-pincode-auth',
  imports: [CommonModule, TuiButton, TuiIcon, TuiLink, TuiRipple],
  templateUrl: './feature-pincode-auth.component.html',
  styleUrl: './feature-pincode-auth.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturePincodeAuthComponent {
  protected readonly pin = signal<string>('');

  addDigit(digit: string) {
    if (this.pin().length < 6) {
      this.pin.update((value) => `${value}${digit}`);
    }
  }

  removeDigit() {
    this.pin.update((value) => value.slice(0, -1));
  }

  resetPin() {
    this.pin.set('');
  }
}
