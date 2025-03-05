import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TUI_DARK_MODE, TuiRoot } from '@taiga-ui/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [TuiRoot, RouterOutlet],
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'siz-control-mobile';
  protected readonly darkMode = inject(TUI_DARK_MODE);
}
