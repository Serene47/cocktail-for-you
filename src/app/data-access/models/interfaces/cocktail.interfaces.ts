import { BadgeVariant } from "../../../shared/components/badge/models/badge.types";

export interface CocktailDTO {
  // Basic drink identification
  idDrink: string;
  strDrink: string;

  // Categorization
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;

  // Media
  strDrinkThumb: string;

  // Instructions 
  strInstructions: string;

  // Ingredients and measurements
  [key: `strIngredient${number}`]: string | null;
  [key: `strMeasure${number}`]: string | null;
}

export interface CocktailSearchResponse {
  drinks: CocktailDTO[] | string | null;
}

export interface CocktailLookupResponse {
  drinks: CocktailDTO[] | string | null;
}

export interface CocktailSummary {
  id: string;
  name: string;
  category: string;
  badgeVariant?: BadgeVariant;
  alcoholicStatus: string;
  thumbnail: string;
}

export interface CocktailIngredients {
  name: string;
  measurement: string;
}

export interface CocktailDetail {
  id: string;
  name: string;
  category: string;
  glassType: string;
  badgeVariant?: BadgeVariant;
  alcoholicStatus: string;
  image: string;
  instructions: string;
  ingredients: CocktailIngredients[];
}


