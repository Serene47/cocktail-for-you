import { Injectable } from '@angular/core';
import { COCKTAIL_IMAGE_TYPES } from '../models/constants/cocktail.constants';
import { CocktailDTO, CocktailSummary } from '../models/interfaces/cocktail.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CocktailAdapterService {

  transforrmDTOToSummary(cocktailDTO: CocktailDTO): CocktailSummary {
    return {
      id: cocktailDTO.idDrink,
      alcoholicStatus: cocktailDTO.strAlcoholic,
      category: cocktailDTO.strCategory,
      name: cocktailDTO.strDrink,
      thumbnail: `${cocktailDTO.strDrinkThumb}/${COCKTAIL_IMAGE_TYPES.SMALL}`
    }
  }
}
