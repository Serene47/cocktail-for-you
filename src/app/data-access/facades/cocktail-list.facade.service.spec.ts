import { TestBed } from '@angular/core/testing';

import { CocktailListFacadeService } from './cocktail-list.facade.service';

describe('CocktailListFacadeService', () => {
  let service: CocktailListFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CocktailListFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
