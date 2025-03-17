import { TestBed } from '@angular/core/testing';

import { COCKTAIL_DETAIL_MOCK_1, COCKTAIL_DTO_MOCK_1, COCKTAIL_SUMMARY_MOCK_1 } from '../models/mocks/cocktail.mocks';
import { CocktailAdapterService } from './cocktail.adapter.service';

describe('CocktailAdapterService', () => {
  let service: CocktailAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CocktailAdapterService);
  });

  it('should transform dto to summary', () => {
    const result = service.transformDTOToSummary(COCKTAIL_DTO_MOCK_1);
    expect(result).toEqual(COCKTAIL_SUMMARY_MOCK_1);
  });

  it('should transform dto to cocktail detail', () => {
    const result = service.transformDTOToDetails(COCKTAIL_DTO_MOCK_1);
    expect(result).toEqual(COCKTAIL_DETAIL_MOCK_1);
  })

});
