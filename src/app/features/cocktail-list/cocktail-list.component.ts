import { AsyncPipe, TitleCasePipe } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { CocktailListFacadeService } from '../../data-access/facades/cocktail-list.facade.service';
import { COCKTAIL_LIST_EMPTY_MESSAGE } from '../../data-access/models/constants/cocktail.constants';
import { CocktailSummaryComponent } from './cocktail-summary/cocktail-summary.component';

@Component({
  selector: 'app-cocktail-list',
  imports: [AsyncPipe, TitleCasePipe, CocktailSummaryComponent],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss'
})
export class CocktailListComponent implements OnInit {
  cocktailFacdeService = inject(CocktailListFacadeService);
  COCKTAIL_LIST_EMPTY_MESSAGE = COCKTAIL_LIST_EMPTY_MESSAGE;

  @Input() type = '';

  ngOnInit(): void {
    this.cocktailFacdeService.getAllCockTails(this.type);
  }

}
