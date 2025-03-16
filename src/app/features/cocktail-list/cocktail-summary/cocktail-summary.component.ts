import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { APP_ROUTES } from '../../../data-access/models/constants/route.constants';
import { CocktailSummary } from '../../../data-access/models/interfaces/cocktail.interfaces';

@Component({
  selector: 'app-cocktail-summary',
  imports: [RouterLink],
  templateUrl: './cocktail-summary.component.html',
  styleUrl: './cocktail-summary.component.scss'
})
export class CocktailSummaryComponent {
  APP_ROUTES = APP_ROUTES;
  @Input({ required: true }) cocktail!: CocktailSummary;
}
