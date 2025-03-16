import { TestBed } from '@angular/core/testing';

import { CocktailDetialsFacadeService } from './cocktail-detials.facade.service';

describe('CocktailDetialsFacadeService', () => {
  let service: CocktailDetialsFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CocktailDetialsFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
