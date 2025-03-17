import { TestBed, waitForAsync } from '@angular/core/testing';

import { HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { CocktailsDataService } from '../data-services/cocktails.data.service';
import { COCKTAIL_DETAILS_ERROR_MESSAGE } from '../models/constants/cocktail.constants';
import { COCKTAIL_DETAIL_MOCK_1, COCKTAIL_LOOKUP_NOT_FOUND_RESPONSE_MOCK, COCKTAIL_LOOKUP_NULL_RESPONSE_MOCK, COCKTAIL_LOOKUP_SUCCESS_RESPONSE_MOCK } from '../models/mocks/cocktail.mocks';
import { CocktailDetailsFacadeService } from './cocktail-details.facade.service';

export const mockCocktailsData = jasmine.createSpyObj('CocktailsDataService', ['getById']);
mockCocktailsData.getById.and.returnValue(of(COCKTAIL_LOOKUP_SUCCESS_RESPONSE_MOCK));


describe('CocktailDetailsFacadeService', () => {
  let service: CocktailDetailsFacadeService;
  let cocktailsDataService: CocktailsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: CocktailsDataService,
          useValue: mockCocktailsData
        }
      ]
    });
    service = TestBed.inject(CocktailDetailsFacadeService);
    cocktailsDataService = TestBed.inject(CocktailsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('fetching cocktail details', () => {

    it('should call getById method of data service with search term', () => {
      service.fetchCocktailDetails('11007');
      expect(cocktailsDataService.getById).toHaveBeenCalledWith('11007');
    });

    it('should transform the response and push to data stream', waitForAsync(() => {
      mockCocktailsData.getById.and.returnValue(of(COCKTAIL_LOOKUP_SUCCESS_RESPONSE_MOCK));
      service.cocktailDetails$.subscribe(
        cocktails => {
          expect(cocktails).toEqual(COCKTAIL_DETAIL_MOCK_1)
        }
      );
      service.fetchCocktailDetails('11007');

    }));

    it('should trigger error stream, if api returns response with not found message', waitForAsync(() => {
      mockCocktailsData.getById.and.returnValue(of(COCKTAIL_LOOKUP_NOT_FOUND_RESPONSE_MOCK));
      service.cocktailDetailsError$.subscribe(
        error => {
          // we emit first value as null
          if (error)
            expect(error).toBe(COCKTAIL_DETAILS_ERROR_MESSAGE)
        }
      )
      service.fetchCocktailDetails('11007');
    }))

    it('should trigger error stream, if api returns response with no drinks', waitForAsync(() => {
      mockCocktailsData.getById.and.returnValue(of(COCKTAIL_LOOKUP_NULL_RESPONSE_MOCK));
      service.cocktailDetailsError$.subscribe(
        error => {
          // we emit first value as null
          if (error)
            expect(error).toBe(COCKTAIL_DETAILS_ERROR_MESSAGE)
        }
      )
      service.fetchCocktailDetails('11007');
    }));

    it('should trigger error stream, if api returns with error', waitForAsync(() => {
      mockCocktailsData.getById.and.returnValue(throwError(() => new HttpErrorResponse({
        error: {},
        status: 500
      })));
      service.cocktailDetailsError$.subscribe(
        error => {
          // we emit first value as null
          if (error)
            expect(error).toBe(COCKTAIL_DETAILS_ERROR_MESSAGE)
        }
      )
      service.fetchCocktailDetails('11007');
    }));
  });
});
