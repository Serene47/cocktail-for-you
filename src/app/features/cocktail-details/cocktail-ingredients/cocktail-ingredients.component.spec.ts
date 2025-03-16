import { ComponentFixture, TestBed } from '@angular/core/testing';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
