import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import type { Recipe } from '../features/recipesSlice.ts';
import RecipeList from '../components/RecipeList.tsx';
import SearchBar from '../components/SearchBar.tsx';
import type { RootState } from '../store/store.ts';

/**
 * todo see below doc for more information:
 *  https://www.themealdb.com/api.php
 */
const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

/**
 * todo use this type for the response of axios.get
 */
interface MealResponse {
  meals: Recipe[];
}

const HomePage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const recipes = useSelector((state: RootState) => state.recipes.recipes);

  const searchRecipes = async (searchTerm) => {
    /**
     * todo write your code here.
     */
  };

  return (
    <div>
      <SearchBar onSearch={searchRecipes} />
      {/* todo use loading of MUI on loading */}
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default HomePage;
