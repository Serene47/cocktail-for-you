import { Component, Input } from '@angular/core';
import { CocktailSummary } from '../../../data-access/models/interfaces/cocktail.interfaces';

@Component({
  selector: 'app-cocktail-summary',
  imports: [],
  templateUrl: './cocktail-summary.component.html',
  styleUrl: './cocktail-summary.component.scss'
})
export class CocktailSummaryComponent {
  @Input({ required: true }) cocktail!: CocktailSummary;
}
