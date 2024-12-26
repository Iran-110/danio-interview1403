# Interview of Danio

1. In this technical interview, you have two questions. 
And you should complete it in at most 45 minutes.
2. Your code must not have any `TypeScript errors`.

**Important Notice:** Disable your **Copilot extension** for code completion.

## First question (Working with an API)
In `HomePage.tsx` file:
1. Complete the search `searchRecipes`:
   1. First, fetch the api from the given api address.
   2. Store the response in the `redux store` of the project.
   3. Handle the loading state correctly.
2. Use an `Spinner` from `Material UI (MUI)` while loading state.
3. If there is nothing item in the response, show an appropriate message on the screen.

## Second Question (Redux State Management)
Now the user can see the list of food items by searching in the search box.

1. In `~/features/recipesSlice.ts`: Complete the `todo` tasks of the specified reducer.
2. In the `~/App.tsx`: Add a `Badge` (MUI badge) to the `Favorite` item in the AppBar showing the current count of favorite items.

![Result Image](https://github.com/Iran-110/danio-interview1403/blob/questions/public/favorite-image.png?raw=true)