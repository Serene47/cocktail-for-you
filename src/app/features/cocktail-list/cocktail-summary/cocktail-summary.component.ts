import { UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COCKTAIL_ALCOHOL_STATUS } from '../../../data-access/models/constants/cocktail.constants';
import { APP_ROUTES } from '../../../data-access/models/constants/route.constants';
import { CocktailSummary } from '../../../data-access/models/interfaces/cocktail.interfaces';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';

@Component({
  selector: 'app-cocktail-summary',
  imports: [RouterLink, UpperCasePipe, BadgeComponent],
  templateUrl: './cocktail-summary.component.html',
  styleUrl: './cocktail-summary.component.scss'
})
export class CocktailSummaryComponent {
  APP_ROUTES = APP_ROUTES;
  COCKTAIL_ALCOHOL_STATUS = COCKTAIL_ALCOHOL_STATUS;
  @Input({ required: true }) cocktail!: CocktailSummary;
}
