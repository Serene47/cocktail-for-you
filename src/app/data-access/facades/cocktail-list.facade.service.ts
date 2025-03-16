import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Subject } from 'rxjs';
import { CocktailAdapterService } from '../adapters/cocktail.adapter.service';
import { CocktailsDataService } from '../data-services/cocktails.data.service';
import { COCKTAIL_LIST_ERROR_MESSAGE } from '../models/constants/cocktail.constants';
import { CocktailSummary } from '../models/interfaces/cocktail.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CocktailListFacadeService {
  cocktailDataService = inject(CocktailsDataService);
  cocktailAdapterService = inject(CocktailAdapterService);

  private cocktailListError = new Subject<string | null>();
  cocktailListError$ = this.cocktailListError.asObservable();
  private cocktailListLoading = new BehaviorSubject(false);
  cocktailListLoading$ = this.cocktailListLoading.asObservable();

  private processedCocktailList = new Subject<CocktailSummary[]>();
  alcoholFilter = new BehaviorSubject<string>('');

  filteredCocktails$ = combineLatest([this.processedCocktailList, this.alcoholFilter])
    .pipe(
      map(([cocktails, alcoholFilter]) => {
        return cocktails;
      })
    );

  fetchAllCockTails(search: string = ''): void {
    this.cocktailListLoading.next(true);
    this.cocktailListError.next(null);
    this.cocktailDataService.getAll(search).subscribe({
      next: response => {
        this.cocktailListLoading.next(false);

        if (!response.drinks)
          throw new Error('no drinks present');

        if (typeof response.drinks === 'string')
          throw new Error(response.drinks);

        const processedCocktailList = response.drinks.map(
          cocktail => this.cocktailAdapterService.transformDTOToSummary(cocktail)
        );
        this.processedCocktailList.next(processedCocktailList);
      },
      error: () => {
        this.cocktailListLoading.next(false);
        this.cocktailListError.next(COCKTAIL_LIST_ERROR_MESSAGE);
      }
    })
  }

}
