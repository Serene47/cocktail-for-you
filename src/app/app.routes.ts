import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) },
  {
    path: "cocktails", children: [
      { path: "", pathMatch: "full", loadComponent: () => import('./features/cocktail-list/cocktail-list.component').then(m => m.CocktailListComponent) },
      { path: ":id", loadComponent: () => import('./features/cocktail-details/cocktail-details.component').then(m => m.CocktailDetailsComponent) },
    ]
  },
];
