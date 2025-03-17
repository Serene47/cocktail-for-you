import { ComponentFixture, TestBed } from '@angular/core/testing';

import { COCKTAIL_INGREDIENTS_MOCK_1 } from '../../../data-access/models/mocks/cocktail.mocks';
import { CocktailIngredientsComponent } from './cocktail-ingredients.component';

describe('CocktailIngredientsComponent', () => {
  let component: CocktailIngredientsComponent;
  let fixture: ComponentFixture<CocktailIngredientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocktailIngredientsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CocktailIngredientsComponent);
    component = fixture.componentInstance;
    component.ingredients = COCKTAIL_INGREDIENTS_MOCK_1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
