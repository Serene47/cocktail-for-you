import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideRouter, RouterLink } from '@angular/router';
import { of } from 'rxjs';
import { CocktailListFacadeService } from '../../data-access/facades/cocktail-list.facade.service';
import { COCKTAIL_ALCOHOL_STATUS } from '../../data-access/models/constants/cocktail.constants';
import { COCKTAIL_SUMMARY_LIST_MOCK } from '../../data-access/models/mocks/cocktail.mocks';
import { CocktailListComponent } from './cocktail-list.component';
import { CocktailSummaryComponent } from './cocktail-summary/cocktail-summary.component';

const cocktailListFacadeMock = jasmine.createSpyObj('CocktailListFacadeService',
  ['fetchAllCockTails', 'updateAlcoholFilter', 'resetState'],
  {
    'cocktailListError$': of(null),
    'filteredCocktails$': of(COCKTAIL_SUMMARY_LIST_MOCK),
    'cocktailListLoading$': of(false)
  });

describe('CocktailListComponent', () => {
  let component: CocktailListComponent;
  let fixture: ComponentFixture<CocktailListComponent>;
  let cocktailListFacade: CocktailListFacadeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocktailListComponent, CocktailSummaryComponent, RouterLink],
      providers: [{
        provide: CocktailListFacadeService,
        useValue: cocktailListFacadeMock
      },
      provideRouter([])]
    })
      .compileComponents();

    cocktailListFacade = TestBed.inject(CocktailListFacadeService);
    fixture = TestBed.createComponent(CocktailListComponent);
    component = fixture.componentInstance;
    component.type = 'margarita';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('updating alcohol filter values', () => {

    it('should update the filter, when select value changes', () => {
      const selectControl: HTMLSelectElement = fixture.nativeElement.querySelector('select');
      const changeEvent = new Event('change');

      selectControl.value = COCKTAIL_ALCOHOL_STATUS.ALCOHOLIC;
      selectControl.dispatchEvent(changeEvent);

      fixture.detectChanges();
      expect(cocktailListFacade.updateAlcoholFilter).toHaveBeenCalledWith(COCKTAIL_ALCOHOL_STATUS.ALCOHOLIC);
    });

    it('should reset the filter, when component destroys', () => {
      component.ngOnDestroy();
      fixture.detectChanges();
      expect(cocktailListFacade.resetState).toHaveBeenCalled();
    })

  })
});
