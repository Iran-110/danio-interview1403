import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface Recipe {
  idMeal: string;
  strMeal: string;
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
        // todo remove the recipe from the list
      } else {
        // todo push the recipe to the list
      }
    },
  },
});

export const { setRecipes, toggleFavorite } = recipesSlice.actions;
export default recipesSlice.reducer;
