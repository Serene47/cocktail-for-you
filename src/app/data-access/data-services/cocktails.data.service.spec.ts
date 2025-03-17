import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { COCKTAIL_LOOKUP_SUCCESS_RESPONSE_MOCK, COCKTAIL_SEARCH_SUCCESS_RESPONSE_MOCK } from '../models/mocks/cocktail.mocks';
import { CocktailsDataService } from './cocktails.data.service';

describe('CocktailsDataService', () => {
  let service: CocktailsDataService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(CocktailsDataService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getting list of all cocktails', () => {
    it('should return list of all cocktails', () => {
      service.getAll().subscribe(cocktails => {
        expect(cocktails).toBeTruthy();
        expect(cocktails.drinks?.length).toBeGreaterThan(0);
      });

      const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

      const req = httpController.expectOne({
        method: 'GET',
        url
      });

      req.flush(COCKTAIL_SEARCH_SUCCESS_RESPONSE_MOCK);
    });
  });

  describe('looking up a particular cocktail', () => {
    it('should return cocktail details associated with the id passed', () => {
      service.getById('11007').subscribe(cocktails => {
        expect(cocktails).toBeTruthy();
        expect(cocktails.drinks?.length).toBeGreaterThan(0);
      });

      const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007'

      const req = httpController.expectOne({
        method: 'GET',
        url
      });

      req.flush(COCKTAIL_LOOKUP_SUCCESS_RESPONSE_MOCK);
    });
  });

  afterEach(() => {
    httpController.verify();
  })

});
