import { TestBed } from '@angular/core/testing';

import { CocktailDetailsFacadeService } from './cocktail-details.facade.service';

describe('CocktailDetailsFacadeService', () => {
  let service: CocktailDetailsFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CocktailDetailsFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
