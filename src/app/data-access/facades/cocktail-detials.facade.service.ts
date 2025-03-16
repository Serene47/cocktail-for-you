import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CocktailAdapterService } from '../adapters/cocktail.adapter.service';
import { CocktailsDataService } from '../data-services/cocktails.data.service';
import { COCKTAIL_DETAILS_ERROR_MESSAGE } from '../models/constants/cocktail.constants';
import { CocktailDetail } from '../models/interfaces/cocktail.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CocktailDetialsFacadeService {
  cocktailDataService = inject(CocktailsDataService);
  cocktailAdapterService = inject(CocktailAdapterService);

  private cocktailDetails = new Subject<CocktailDetail>();
  cocktailDetails$ = this.cocktailDetails.asObservable();
  private cocktailDetailsError = new Subject<string | null>();
  cocktailDetailsError$ = this.cocktailDetailsError.asObservable();
  private cocktailDetailsLoading = new BehaviorSubject(false);
  cocktailDetailsLoading$ = this.cocktailDetailsLoading.asObservable();

  getCocktailDetails(id: string): void {
    this.cocktailDetailsLoading.next(true);
    this.cocktailDetailsError.next(null);
    this.cocktailDataService.getById(id).subscribe({
      next: response => {
        this.cocktailDetailsLoading.next(false);

        if (typeof response.drinks === 'string')
          throw new Error(response.drinks);

        if (!response.drinks || !response.drinks[0])
          throw new Error('no drinks present');

        const cocktailDetails = this.cocktailAdapterService.transforrmDTOToDetails(response.drinks[0]);
        this.cocktailDetails.next(cocktailDetails);
      },
      error: () => {
        this.cocktailDetailsLoading.next(false);
        this.cocktailDetailsError.next(COCKTAIL_DETAILS_ERROR_MESSAGE);
      }
    })
  }

}
