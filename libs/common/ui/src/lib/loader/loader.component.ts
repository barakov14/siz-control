import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiLoader } from '@taiga-ui/core';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'sc-loader',
  imports: [CommonModule, TuiLoader],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {
  protected readonly platform = inject(Platform);

}
