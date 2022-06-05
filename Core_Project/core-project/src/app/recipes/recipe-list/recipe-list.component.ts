import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a Test recipe',
      'https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_1280.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is a Test recipe',
      'https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_1280.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
