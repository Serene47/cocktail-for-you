import { AsyncPipe, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CocktailListFacadeService } from '../../data-access/facades/cocktail-list.facade.service';
import { DropdownFacadeService } from '../../data-access/facades/dropdown.facade.service';
import { COCKTAIL_LIST_EMPTY_MESSAGE } from '../../data-access/models/constants/cocktail.constants';
import { LoaderComponent } from '../../shared/components/loader/loader.component';
import { CocktailSummaryComponent } from './cocktail-summary/cocktail-summary.component';

@Component({
  selector: 'app-cocktail-list',
  imports: [AsyncPipe, TitleCasePipe, CocktailSummaryComponent, LoaderComponent, RouterLink],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CocktailListComponent implements OnInit, OnDestroy {
  dropdownFacadeService = inject(DropdownFacadeService);
  cocktailFacadeService = inject(CocktailListFacadeService);
  COCKTAIL_LIST_EMPTY_MESSAGE = COCKTAIL_LIST_EMPTY_MESSAGE;

  @Input() type = '';

  ngOnInit(): void {
    this.cocktailFacadeService.fetchAllCockTails(this.type);
  }

  onAlcoholFilterChange(event: Event): void {
    if (event.target && event.target instanceof HTMLSelectElement)
      this.cocktailFacadeService.updateAlcoholFilter(event.target.value);
  }

  ngOnDestroy(): void {
    this.cocktailFacadeService.resetState();
  }
}
