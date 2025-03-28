import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CocktailIngredients } from '../../../data-access/models/interfaces/cocktail.interfaces';

@Component({
  selector: 'app-cocktail-ingredients',
  imports: [],
  templateUrl: './cocktail-ingredients.component.html',
  styleUrl: './cocktail-ingredients.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CocktailIngredientsComponent {
  @Input({ required: true }) ingredients!: CocktailIngredients[];
}
