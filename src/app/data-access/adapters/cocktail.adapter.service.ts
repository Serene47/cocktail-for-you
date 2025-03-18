import { Injectable } from '@angular/core';
import { BadgeVariant } from '../../shared/components/badge/models/badge.types';
import { COCKTAIL_IMAGE_TYPES, COCKTAIL_INGREDIENT_MEASURE_KEY, COCKTAIL_INGREDIENT_NAME_KEY_REGEX } from '../models/constants/cocktail.constants';
import { CocktailDetail, CocktailDTO, CocktailIngredients, CocktailSummary } from '../models/interfaces/cocktail.interfaces';
import { ALCOHOLIC_STATUS_BADGE_MAPPING } from '../models/maps/cocktail.maps';

@Injectable({
  providedIn: 'root'
})
export class CocktailAdapterService {

  transformDTOToSummary(cocktailDTO: CocktailDTO): CocktailSummary {
    return {
      id: cocktailDTO.idDrink,
      alcoholicStatus: cocktailDTO.strAlcoholic,
      badgeVariant: this.getBadgeVariant(cocktailDTO.strAlcoholic),
      category: cocktailDTO.strCategory,
      name: cocktailDTO.strDrink,
      thumbnail: `${cocktailDTO.strDrinkThumb}/${COCKTAIL_IMAGE_TYPES.MEDIUM}`
    }
  }

  transformDTOToDetails(cocktailDTO: CocktailDTO): CocktailDetail {
    const ingredients = this.transformIngredients(cocktailDTO);
    return {
      id: cocktailDTO.idDrink,
      alcoholicStatus: cocktailDTO.strAlcoholic,
      badgeVariant: this.getBadgeVariant(cocktailDTO.strAlcoholic),
      category: cocktailDTO.strCategory,
      glassType: cocktailDTO.strGlass,
      name: cocktailDTO.strDrink,
      image: `${cocktailDTO.strDrinkThumb}/${COCKTAIL_IMAGE_TYPES.LARGE}`,
      instructions: cocktailDTO.strInstructions,
      ingredients
    }
  }

  transformIngredients(cocktailDTO: CocktailDTO): CocktailIngredients[] {
    const ingredients: CocktailIngredients[] = [];
    return Object.entries(cocktailDTO).reduce((acc, [key, value]) => {
      const match = key.match(COCKTAIL_INGREDIENT_NAME_KEY_REGEX);
      // match will be not empty if string starts wirh strIngredient and match[1] holds the index
      if (!match || !match[0]) return acc;
      if (!value) return acc;

      const measurementKey = `${COCKTAIL_INGREDIENT_MEASURE_KEY}${match[1]}` as keyof CocktailDTO;
      const measurement = cocktailDTO[measurementKey] || '-';
      acc.push({ name: value, measurement })
      return acc;
    }, ingredients);
  }

  getBadgeVariant(status: string): BadgeVariant {
    return ALCOHOLIC_STATUS_BADGE_MAPPING[status];
  }

}
