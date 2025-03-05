import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationSkipped,
  NavigationStart,
  Router,
  Routes,
} from '@angular/router';
import { inject, provideEnvironmentInitializer } from '@angular/core';
import { LoaderService } from '@sc-client/config';
import { lastValueFrom, tap } from 'rxjs';

export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(
        './layouts/authorized-user-layout/authorized-user-layout.component'
      ).then((c) => c.AuthorizedUserLayoutComponent),
    providers: [
      provideEnvironmentInitializer(() => {
        const loaderService = inject(LoaderService);
        const router = inject(Router);

        lastValueFrom(
          router.events.pipe(
            tap((value) => {
              if (value instanceof NavigationStart) {
                loaderService.show();
              } else if (
                value instanceof NavigationEnd ||
                value instanceof NavigationError ||
                value instanceof NavigationCancel ||
                value instanceof NavigationSkipped
              ) {
                loaderService.close();
              }
            })
          )
        );
      }),
    ],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./layouts/tab-layout/tab-layout.component').then(
            (c) => c.TabLayoutComponent
          ),
        data: { animation: 'page1' },
        children: [
          {
            path: 'profile',
            loadComponent: () =>
              import('@sc-client/staff-cabinet').then(
                (c) => c.MenuNavigatorComponent
              ),
          },
          {
            path: 'notifications',
            loadComponent: () =>
              import('@sc-client/staff-notifications').then(
                (c) => c.FeatureStaffNotificationsComponent
              ),
          },
        ],
      },
      {
        path: 'profile/size',
        loadComponent: () =>
          import('@sc-client/staff-size').then(
            (c) => c.FeatureStaffSizeComponent
          ),
        data: { animation: 'page2' },
      },
      {
        path: 'profile/settings',
        loadComponent: () =>
          import('@sc-client/staff-settings').then(
            (c) => c.FeatureStaffSettingsComponent
          ),
        data: { animation: 'page2' },
      },
    ],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('@sc-client/auth').then((c) => c.FeatureEmployeeAuthComponent),
  },
  {
    path: 'pin',
    loadComponent: () =>
      import('@sc-client/auth').then((c) => c.FeaturePincodeAuthComponent),
  },
];
