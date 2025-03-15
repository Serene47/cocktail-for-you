import { TestBed } from '@angular/core/testing';

import { CocktailFacadeService } from './cocktail.facade.service';

describe('CocktailFacadeService', () => {
  let service: CocktailFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CocktailFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
