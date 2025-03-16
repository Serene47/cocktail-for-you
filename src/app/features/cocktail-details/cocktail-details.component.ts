import { AsyncPipe } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CocktailDetailsFacadeService } from '../../data-access/facades/cocktail-details.facade.service';
import { LoaderComponent } from '../../shared/components/loader/loader.component';
import { CocktailIngredientsComponent } from './cocktail-ingredients/cocktail-ingredients.component';

@Component({
  selector: 'app-cocktail-details',
  imports: [AsyncPipe, CocktailIngredientsComponent, LoaderComponent, RouterLink],
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
