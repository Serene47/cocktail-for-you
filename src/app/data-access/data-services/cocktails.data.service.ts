import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { COCKTAIL_ENDPOINTS } from '../models/constants/cocktail.constants';
import { CocktailLookupResponse, CocktailSearchResponse } from '../models/interfaces/cocktail.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CocktailsDataService {
  httpClient = inject(HttpClient);

  getAll(keyword: string = ''): Observable<CocktailSearchResponse> {
    return this.httpClient.get<CocktailSearchResponse>(`${environment.cockTailAPI}/${COCKTAIL_ENDPOINTS.SEARCH}${keyword}`);
  }

  getById(id: string) {
    return this.httpClient.get<CocktailLookupResponse>(`${environment.cockTailAPI}/${COCKTAIL_ENDPOINTS.LOOKUP}${id}`);
  }

}
