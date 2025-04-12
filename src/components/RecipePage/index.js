// src/components/RecipePage/index.js
import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

function RecipePage({searchTerm}) {
  // Receive searchTerm as a prop
  const sampleRecipes = [
    {
      idMeal: '1',
      strMeal: 'Homemade Pizza',
      strInstructions: 'Make the dough, add toppings, and bake!',
    },
    {
      idMeal: '2',
      strMeal: 'Classic Burger',
      strInstructions: 'Grill the patty, assemble with your favorite toppings.',
    },
    {
      idMeal: '3',
      strMeal: 'Spaghetti and Meatballs',
      strInstructions:
        'Cook the spaghetti, prepare the meatballs, and combine with sauce.',
    },
    {
      idMeal: '4',
      strMeal: 'Chicken Stir-Fry',
      strInstructions:
        'Stir-fry chicken and vegetables with your choice of sauce.',
    },
    {
      idMeal: '5',
      strMeal: 'Chocolate Cake',
      strInstructions: 'Bake a rich chocolate cake and frost it.',
    },
  ]

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
