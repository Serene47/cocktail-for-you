
export const COCKTAIL_SEARCH_TYPES = {
  MARGARITA: 'margarita',
  MOJITO: 'mojito'
} as const;

export const COCKTAIL_IMAGE_TYPES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
} as const;

export const COCKTAIL_ENDPOINTS = {
  SEARCH: 'search.php?s=',
  LOOKUP: 'lookup.php?i='
} as const;

// messages

export const COCKTAIL_LIST_ERROR_MESSAGE = 'Something went wrong, we are unable to retrieve data';
export const COCKTAIL_LIST_EMPTY_MESSAGE = 'Sorry, we couldn\'t find anything for your inputs.';

export const COCKTAIL_DETAILS_ERROR_MESSAGE = 'Something went wrong, we are unable to retrieve data';

export const COCKTAIL_INGREDIENT_NAME_KEY_REGEX = /strIngredient(\d+)/;
export const COCKTAIL_INGREDIENT_MEASURE_KEY = 'strMeasure';

