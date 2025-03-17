import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideRouter, RouterLink } from '@angular/router';
import { COCKTAIL_SUMMARY_MOCK_1 } from '../../../data-access/models/mocks/cocktail.mocks';
import { CocktailSummaryComponent } from './cocktail-summary.component';

describe('CocktailSummaryComponent', () => {
  let component: CocktailSummaryComponent;
  let fixture: ComponentFixture<CocktailSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocktailSummaryComponent, RouterLink],
      providers: [provideRouter([])]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CocktailSummaryComponent);
    component = fixture.componentInstance;
    component.cocktail = COCKTAIL_SUMMARY_MOCK_1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
