
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
  drinks: CocktailDTO[] | string;
}

export interface CocktailSummary {
  id: string;
  name: string;
  category: string;
  alcoholicStatus: string;
  thumbnail: string;
}

export interface CocktailIngredients {
  name: string;
  measure: string;
  image: string;
}

export interface CocktailDetail {
  id: string;
  name: string;
  category: string;
  alcoholic: string;
  image: string;
  instructions: string;
  ingrediernts: CocktailIngredients[];

}


