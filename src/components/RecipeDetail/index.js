// src/components/RecipeDetail/index.js
import React from 'react'
import {useParams, Link} from 'react-router-dom'
import './index.css'
import {sampleRecipes} from '../RecipePage'

function RecipeDetail() {
  const {id} = useParams()
  const recipe = sampleRecipes.find(r => r.idMeal === id)

  return (
    <div className="recipe-details-container">
      {recipe ? (
        <>
          <h2>{recipe.strMeal}</h2>
          {recipe.strInstructions && (
            <>
              <h3>Instructions:</h3>
              <p className="recipe-instructions">{recipe.strInstructions}</p>
            </>
          )}
          {recipe.ingredients && (
            <>
              <h3>Ingredients:</h3>
              <ul>
                {recipe.ingredients.map(ingredient => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
            </>
          )}
        </>
      ) : (
        <p>Details for recipe ID: {id} are not available in the local data.</p>
      )}
      <Link to="/">Back to Recipes</Link>
    </div>
  )
}

export default RecipeDetail
