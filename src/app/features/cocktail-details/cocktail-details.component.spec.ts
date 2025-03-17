import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideRouter, RouterLink } from '@angular/router';
import { of } from 'rxjs';
import { CocktailDetailsFacadeService } from '../../data-access/facades/cocktail-details.facade.service';
import { COCKTAIL_DETAIL_MOCK_1 } from '../../data-access/models/mocks/cocktail.mocks';
import { CocktailDetailsComponent } from './cocktail-details.component';


const cocktailDetailFacade = jasmine.createSpyObj('CocktailDetailsFacadeService',
  ['fetchCocktailDetails'],
  {
    'cocktailDetailsError$': of(null),
    'cocktailDetails$': of(COCKTAIL_DETAIL_MOCK_1),
    'cocktailDetailsLoading$': of(false)
  });

describe('CocktailDetailsComponent', () => {
  let component: CocktailDetailsComponent;
  let fixture: ComponentFixture<CocktailDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocktailDetailsComponent, RouterLink],
      providers: [
        {
          provide: CocktailDetailsFacadeService,
          useValue: cocktailDetailFacade
        },
        provideRouter([])
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CocktailDetailsComponent);
    component = fixture.componentInstance;
    component.id = '11007';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
