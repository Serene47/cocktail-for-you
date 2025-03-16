import { AsyncPipe } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { CocktailDetailsFacadeService } from '../../data-access/facades/cocktail-details.facade.service';
import { CocktailIngredientsComponent } from './cocktail-ingredients/cocktail-ingredients.component';

@Component({
  selector: 'app-cocktail-details',
  imports: [AsyncPipe, CocktailIngredientsComponent],
  templateUrl: './cocktail-details.component.html',
  styleUrl: './cocktail-details.component.scss'
})
export class CocktailDetailsComponent implements OnInit {
  cocktailFacadeService = inject(CocktailDetailsFacadeService);

  @Input({ required: true }) id!: string;

  ngOnInit(): void {
    this.cocktailFacadeService.fetchCocktailDetails(this.id);
  }
}
