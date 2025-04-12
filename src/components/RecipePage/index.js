// src/components/RecipePage/index.js
import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

export const sampleRecipes = [
  // Add 'export' keyword
  {
    idMeal: '1',
    strMeal: 'Homemade Pizza',
    strInstructions:
      'Preheat oven to 450°F. Stretch dough, spread sauce, add cheese and toppings. Bake for 15-20 minutes.',
    ingredients: [
      'Pizza dough',
      'Tomato sauce',
      'Mozzarella cheese',
      'Pepperoni',
      'Mushrooms',
    ],
  },
  {
    idMeal: '2',
    strMeal: 'Classic Burger',
    strInstructions:
      'Grill patty to desired doneness. Toast bun. Assemble with lettuce, tomato, onion, and condiments.',
    ingredients: [
      'Ground beef',
      'Burger buns',
      'Lettuce',
      'Tomato',
      'Onion',
      'Ketchup',
      'Mustard',
    ],
  },
  {
    idMeal: '3',
    strMeal: 'Spaghetti and Meatballs',
    strInstructions:
      'Cook spaghetti according to package directions. Brown meatballs in a pan. Simmer in tomato sauce. Serve over spaghetti.',
    ingredients: [
      'Spaghetti',
      'Ground meat',
      'Breadcrumbs',
      'Egg',
      'Parmesan cheese',
      'Tomato sauce',
    ],
  },
  {
    idMeal: '4',
    strMeal: 'Chicken Stir-Fry',
    strInstructions:
      'Cut chicken and vegetables into bite-sized pieces. Stir-fry chicken until cooked through. Add vegetables and sauce. Cook until tender.',
    ingredients: [
      'Chicken breast',
      'Broccoli florets',
      'Carrots',
      'Bell peppers',
      'Soy sauce',
      'Ginger',
    ],
  },
  {
    idMeal: '5',
    strMeal: 'Chocolate Cake',
    strInstructions:
      'Preheat oven to 350°F. Mix dry ingredients, then wet ingredients. Bake for 30-35 minutes. Frost when cooled.',
    ingredients: [
      'Flour',
      'Sugar',
      'Cocoa powder',
      'Eggs',
      'Milk',
      'Butter',
      'Frosting',
    ],
  },
]

function RecipePage({searchTerm}) {
  const filteredRecipes = sampleRecipes.filter(recipe =>
    recipe.strMeal.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="recipe-page-container">
      <h2>Recipes</h2>
      <div className="recipe-grid">
        {filteredRecipes.map(recipe => (
          <Link key={recipe.idMeal} to={`/recipe/${recipe.idMeal}`}>
            <div className="recipe-card-no-image">
              <h3>{recipe.strMeal}</h3>
              <p className="recipe-description">
                {recipe.strInstructions.substring(0, 100)}...
              </p>
              <button className="view-recipe-button">View Recipe</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default RecipePage
