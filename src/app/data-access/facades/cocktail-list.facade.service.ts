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
  private alcoholFilter = new BehaviorSubject<string>('');

  filteredCocktails$ = combineLatest([this.processedCocktailList, this.alcoholFilter])
    .pipe(
      map(([cocktails, alcoholFilter]) => {
        if (!alcoholFilter) return cocktails;
        return cocktails.filter(cocktail => cocktail.alcoholicStatus === alcoholFilter);
      })
    );

  fetchAllCockTails(search: string = ''): void {
    this.cocktailListLoading.next(true);
    this.cocktailListError.next(null);
    this.cocktailDataService.getAll(search).subscribe({
      next: response => {
        this.cocktailListLoading.next(false);

        if (!response.drinks) {
          this.cocktailListError.next(COCKTAIL_LIST_ERROR_MESSAGE);
          return;
        }

        if (typeof response.drinks === 'string') {
          this.cocktailListError.next(COCKTAIL_LIST_ERROR_MESSAGE);
          return;
        }

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

  updateAlcoholFilter(value: string): void {
    this.alcoholFilter.next(value);
  }

  resetState(): void {
    this.updateAlcoholFilter('');
  }
}
