import { TestBed, waitForAsync } from '@angular/core/testing';

import { HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { CocktailsDataService } from '../data-services/cocktails.data.service';
import { COCKTAIL_ALCOHOL_STATUS, COCKTAIL_LIST_ERROR_MESSAGE } from '../models/constants/cocktail.constants';
import { COCKTAIL_SEARCH_NOT_FOUND_RESPONSE_MOCK, COCKTAIL_SEARCH_NULL_RESPONSE_MOCK, COCKTAIL_SEARCH_SUCCESS_RESPONSE_MOCK, COCKTAIL_SUMMARY_LIST_MOCK, COCKTAIL_SUMMARY_MOCK_1, COCKTAIL_SUMMARY_MOCK_2 } from '../models/mocks/cocktail.mocks';
import { CocktailListFacadeService } from './cocktail-list.facade.service';

export const mockCocktailsData = jasmine.createSpyObj('CocktailsDataService', ['getAll']);
mockCocktailsData.getAll.and.returnValue(of(COCKTAIL_SEARCH_SUCCESS_RESPONSE_MOCK));

export const mockCocktailAdapter = jasmine.createSpyObj('CocktailAdapterService', ['transformDTOToSummary']);
mockCocktailAdapter.transformDTOToSummary.and.returnValues(COCKTAIL_SUMMARY_MOCK_1, COCKTAIL_SUMMARY_MOCK_2);

describe('CocktailListFacadeService', () => {
  let service: CocktailListFacadeService;
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
    service = TestBed.inject(CocktailListFacadeService);
    cocktailsDataService = TestBed.inject(CocktailsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('fetching cocktails', () => {

    it('should call getAll method of data service with search term', () => {
      service.fetchAllCockTails('margarita');
      expect(cocktailsDataService.getAll).toHaveBeenCalledWith('margarita');
    });

    it('should transform the response and push to data stream', waitForAsync(() => {
      service.resetState();
      mockCocktailsData.getAll.and.returnValue(of(COCKTAIL_SEARCH_SUCCESS_RESPONSE_MOCK));
      service.filteredCocktails$.subscribe(
        cocktails => {
          expect(cocktails).toEqual(COCKTAIL_SUMMARY_LIST_MOCK)
        }
      );
      service.fetchAllCockTails('margarita');

    }));

    it('should trigger error stream, if api returns response with not found message', waitForAsync(() => {
      mockCocktailsData.getAll.and.returnValue(of(COCKTAIL_SEARCH_NOT_FOUND_RESPONSE_MOCK));
      service.cocktailListError$.subscribe(
        error => {
          // we emit first value as null
          if (error)
            expect(error).toBe(COCKTAIL_LIST_ERROR_MESSAGE)
        }
      )
      service.fetchAllCockTails('margarita');
    }))

    it('should trigger error stream, if api returns response with no drinks', waitForAsync(() => {
      mockCocktailsData.getAll.and.returnValue(of(COCKTAIL_SEARCH_NULL_RESPONSE_MOCK));
      service.cocktailListError$.subscribe(
        error => {
          // we emit first value as null
          if (error)
            expect(error).toBe(COCKTAIL_LIST_ERROR_MESSAGE)
        }
      )
      service.fetchAllCockTails('margarita');
    }));

    it('should trigger error stream, if api returns with error', waitForAsync(() => {
      mockCocktailsData.getAll.and.returnValue(throwError(() => new HttpErrorResponse({
        error: {},
        status: 500
      })));
      service.cocktailListError$.subscribe(
        error => {
          // we emit first value as null
          if (error)
            expect(error).toBe(COCKTAIL_LIST_ERROR_MESSAGE)
        }
      )
      service.fetchAllCockTails('margarita');
    }));
  });


  describe('filtering cocktail list', () => {

    it('should filter the list, if filter is set', () => {
      mockCocktailsData.getAll.and.returnValue(of(COCKTAIL_SEARCH_SUCCESS_RESPONSE_MOCK));
      service.updateAlcoholFilter(COCKTAIL_ALCOHOL_STATUS.NON_ALCOHOLIC);
      service.filteredCocktails$.subscribe(
        cocktails => {
          expect(cocktails).toEqual([])
        }
      );
      service.fetchAllCockTails('margarita');
    });

  })

});
