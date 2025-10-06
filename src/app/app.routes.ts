import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'ci-login',
    loadComponent: () =>
      import('./prelogin/components/auth/ci-login.component').then(
        (m) => m.CiLoginComponent
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./prelogin/layout/shell/prelogin-shell.component').then(
        (m) => m.PreloginShellComponent
      ),
  },
];
