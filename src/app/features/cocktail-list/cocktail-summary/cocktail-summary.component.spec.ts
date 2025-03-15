import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailSummaryComponent } from './cocktail-summary.component';

describe('CocktailSummaryComponent', () => {
  let component: CocktailSummaryComponent;
  let fixture: ComponentFixture<CocktailSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocktailSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CocktailSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
