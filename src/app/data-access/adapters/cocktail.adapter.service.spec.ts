import { TestBed } from '@angular/core/testing';

import { CocktailAdapterService } from './cocktail.adapter.service';

describe('CocktailAdapterService', () => {
  let service: CocktailAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CocktailAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
