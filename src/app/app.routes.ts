import { Routes } from '@angular/router';

import { DirectiveDocumentationComponent } from './directives/directive-documentation/directive-documentation.component';
import { ServiceDocumentationComponent } from './services/service-documentation/service-documentation.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/components.module').then((m) => m.ComponentsModule),
  },
  {
    path: 'directives',
    component: DirectiveDocumentationComponent,
  },
  {
    path: 'pipes',
    loadChildren: () =>
      import('./pipes/pipes.module').then((m) => m.PipesModule),
  },
  {
    path: 'services',
    component: ServiceDocumentationComponent,
  },
];
