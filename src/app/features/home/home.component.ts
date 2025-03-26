import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COCKTAIL_SEARCH_TYPES } from '../../data-access/models/constants/cocktail.constants';
import { APP_ROUTES } from './../../data-access/models/constants/route.constants';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  COCKTAIL_SEARCH_TYPES = COCKTAIL_SEARCH_TYPES;
  APP_ROUTES = APP_ROUTES;
}
