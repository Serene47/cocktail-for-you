import { Routes } from '@angular/router';
import { APP_ROUTES } from './data-access/models/constants/route.constants';

export const routes: Routes = [
  { path: "", redirectTo: APP_ROUTES.HOME, pathMatch: "full" },
  { path: APP_ROUTES.HOME, loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) },
  {
    path: APP_ROUTES.COCKTAILS, children: [
      { path: "", pathMatch: "full", loadComponent: () => import('./features/cocktail-list/cocktail-list.component').then(m => m.CocktailListComponent) },
      { path: `:id/${APP_ROUTES.COCKTAIL_DETAILS}`, loadComponent: () => import('./features/cocktail-details/cocktail-details.component').then(m => m.CocktailDetailsComponent) },
    ]
  },
];
