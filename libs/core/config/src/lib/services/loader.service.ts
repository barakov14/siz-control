import { inject, Injectable } from '@angular/core';
import { TuiPopoverService } from '@taiga-ui/cdk';
import { PolymorpheusComponent } from '@taiga-ui/polymorpheus';
import { LoaderComponent } from '@sc-client/common/ui';
import { Dialog } from '@angular/cdk/dialog';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  readonly #dialogService = inject(Dialog)
  show() {
    this.#dialogService.open(LoaderComponent)
  }

  close() {
    this.#dialogService.closeAll();
  }
}
