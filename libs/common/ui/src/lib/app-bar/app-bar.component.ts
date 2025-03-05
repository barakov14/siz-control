import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiAppBarBack, TuiAppBarComponent } from '@taiga-ui/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'sc-app-bar',
  imports: [CommonModule, TuiAppBarComponent, TuiAppBarBack],
  templateUrl: './app-bar.component.html',
  styleUrl: './app-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppBarComponent {
  readonly #router = inject(Router);

  readonly goBack = () => {
    const parentUrl = this.#router.url.split('/').slice(0, -1).join('/') || '/';
    this.#router.navigateByUrl(parentUrl);
  };
}
