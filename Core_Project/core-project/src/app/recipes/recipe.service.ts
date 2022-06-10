import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.modal';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.modal';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Chicken Dinner',
      'Tasty Chicken Dinner',
      'https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_1280.jpg',
      [
        new Ingredient('Chicken Breast', 1),
        new Ingredient('Potato', 1),
        new Ingredient('Onion', 1),
        new Ingredient('Tyme', 1),
        new Ingredient('Garlic', 1),
      ]
    ),
    new Recipe(
      'Gourmet Hotdogs',
      'Amazing, Tasty Hotdogs',
      'https://cdn.pixabay.com/photo/2019/10/30/14/20/hotdog-4589626_1280.jpg',
      [
        new Ingredient('Brat', 5),
        new Ingredient('Buns', 5),
        new Ingredient('Onion', 1),
        new Ingredient('Garlic', 1),
        new Ingredient('Mustard', 1),
        new Ingredient('Ketchup', 1),
        new Ingredient('Lettuce', 1),
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredientsFromSelectedRecipe(ingredients);
  }
}
