import { CocktailDetail, CocktailDTO, CocktailIngredients, CocktailLookupResponse, CocktailSearchResponse, CocktailSummary } from "../interfaces/cocktail.interfaces";

export const COCKTAIL_DTO_MOCK_1: CocktailDTO = {
  "idDrink": "11007",
  "strDrink": "Margarita",

  "strCategory": "Ordinary Drink",
  "strAlcoholic": "Alcoholic",
  "strGlass": "Cocktail glass",

  "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",

  "strInstructions": "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",

  "strIngredient1": "Tequila",
  "strIngredient2": "Triple sec",
  "strIngredient3": "Lime juice",
  "strIngredient4": "Salt",
  "strIngredient5": null,
  "strIngredient6": null,
  "strIngredient7": null,
  "strIngredient8": null,
  "strIngredient9": null,
  "strIngredient10": null,
  "strIngredient11": null,
  "strIngredient12": null,
  "strIngredient13": null,
  "strIngredient14": null,
  "strIngredient15": null,
  "strMeasure1": "1 1/2 oz ",
  "strMeasure2": "1/2 oz ",
  "strMeasure3": "1 oz ",
  "strMeasure4": null,
  "strMeasure5": null,
  "strMeasure6": null,
  "strMeasure7": null,
  "strMeasure8": null,
  "strMeasure9": null,
  "strMeasure10": null,
  "strMeasure11": null,
  "strMeasure12": null,
  "strMeasure13": null,
  "strMeasure14": null,
  "strMeasure15": null,
}

export const COCKTAIL_DTO_MOCK_2: CocktailDTO = {

  "idDrink": "11000",
  "strDrink": "Mojito",

  "strCategory": "Cocktail",
  "strAlcoholic": "Alcoholic",
  "strGlass": "Highball glass",

  "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg",
  "strInstructions": "Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with cracked ice. Pour the rum and top with soda water. Garnish and serve with straw.",


  "strIngredient1": "Light rum",
  "strIngredient2": "Lime",
  "strIngredient3": "Sugar",
  "strIngredient4": "Mint",
  "strIngredient5": "Soda water",
  "strIngredient6": null,
  "strIngredient7": null,
  "strIngredient8": null,
  "strIngredient9": null,
  "strIngredient10": null,
  "strIngredient11": null,
  "strIngredient12": null,
  "strIngredient13": null,
  "strIngredient14": null,
  "strIngredient15": null,
  "strMeasure1": "2-3 oz ",
  "strMeasure2": "Juice of 1 ",
  "strMeasure3": "2 tsp ",
  "strMeasure4": "2-4 ",
  "strMeasure5": null,
  "strMeasure6": null,
  "strMeasure7": null,
  "strMeasure8": null,
  "strMeasure9": null,
  "strMeasure10": null,
  "strMeasure11": null,
  "strMeasure12": null,
  "strMeasure13": null,
  "strMeasure14": null,
  "strMeasure15": null,
}

export const COCKTAIL_SEARCH_SUCCESS_RESPONSE_MOCK: CocktailSearchResponse = {
  drinks: [COCKTAIL_DTO_MOCK_1, COCKTAIL_DTO_MOCK_2]
};

export const COCKTAIL_SEARCH_NOT_FOUND_RESPONSE_MOCK: CocktailSearchResponse = {
  drinks: 'no data found'
};

export const COCKTAIL_SEARCH_NULL_RESPONSE_MOCK: CocktailSearchResponse = {
  drinks: null
};

export const COCKTAIL_LOOKUP_SUCCESS_RESPONSE_MOCK: CocktailLookupResponse = {
  drinks: [COCKTAIL_DTO_MOCK_1]
};

export const COCKTAIL_LOOKUP_NOT_FOUND_RESPONSE_MOCK: CocktailSearchResponse = {
  drinks: 'no data found'
};

export const COCKTAIL_LOOKUP_NULL_RESPONSE_MOCK: CocktailSearchResponse = {
  drinks: null
};

export const COCKTAIL_SUMMARY_MOCK_1: CocktailSummary = {
  id: '11007',
  alcoholicStatus: 'Alcoholic',
  category: 'Ordinary Drink',
  name: 'Margarita',
  thumbnail: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg/medium'
}

export const COCKTAIL_SUMMARY_MOCK_2: CocktailSummary = {
  id: '11000',
  alcoholicStatus: 'Alcoholic',
  category: 'Cocktail',
  name: 'Mojito',
  thumbnail: 'https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg/medium'
}

export const COCKTAIL_SUMMARY_LIST_MOCK = [COCKTAIL_SUMMARY_MOCK_1, COCKTAIL_SUMMARY_MOCK_2];

export const COCKTAIL_INGREDIENTS_MOCK_1: CocktailIngredients[] = [
  { name: 'Tequila', measurement: '1 1/2 oz ' },
  { name: 'Triple sec', measurement: '1/2 oz ' },
  { name: 'Lime juice', measurement: '1 oz ' },
  { name: 'Salt', measurement: '-' }
]

export const COCKTAIL_DETAIL_MOCK_1: CocktailDetail = {
  id: '11007',
  alcoholicStatus: 'Alcoholic',
  category: 'Ordinary Drink',
  name: 'Margarita',
  image: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg/large',
  instructions: 'Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.',
  ingredients: COCKTAIL_INGREDIENTS_MOCK_1
}


