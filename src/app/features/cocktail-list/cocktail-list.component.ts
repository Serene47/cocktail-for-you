import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { CocktailFacadeService } from '../../data-access/facades/cocktail.facade.service';

@Component({
  selector: 'app-cocktail-list',
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss'
})
export class CocktailListComponent implements OnInit {
  cocktailFacdeService = inject(CocktailFacadeService);

  @Input() type = '';

  ngOnInit(): void {
    this.cocktailFacdeService.getAllCockTails(this.type);
  }

}
