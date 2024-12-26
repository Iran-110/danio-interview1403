import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface Recipe {
  // id of the meal
  idMeal: string;

  // the title of the meal
  strMeal: string;

  // image address of the meal
  strMealThumb: string;
}

interface RecipesState {
  recipes: Recipe[];
  favorites: Recipe[];
}

const initialState: RecipesState = {
  recipes: [],
  favorites: [],
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setRecipes(state, action: PayloadAction<Recipe[]>) {
      state.recipes = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<Recipe>) {
      const recipe = action.payload;
      const isFavorite = state.favorites.some((fav) => fav.idMeal === recipe.idMeal);
      if (isFavorite) {
        state.favorites = state.favorites.filter((fav) => fav.idMeal !== recipe.idMeal);
      } else {
        state.favorites.push(recipe);
      }
    },
  },
});

export const { setRecipes, toggleFavorite } = recipesSlice.actions;
export default recipesSlice.reducer;
