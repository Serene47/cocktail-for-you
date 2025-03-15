import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COCKTAIL_CATEGORIES } from '../../data-access/models/constants/cocktail.constants';
import { APP_ROUTES } from './../../data-access/models/constants/route.constants';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  COCKTAIL_CATEGORIES = COCKTAIL_CATEGORIES;
  APP_ROUTES = APP_ROUTES;

}
