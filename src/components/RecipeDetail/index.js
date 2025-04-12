// src/components/RecipeDetail/index.js
import React, {useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import './index.css'
import {sampleRecipes} from '../RecipePage'

const unitConversion = {
  // Simplified sample conversion table
  cup: {metric: '240ml', imperial: '1 cup'},
  tbsp: {metric: '15ml', imperial: '1 tbsp'},
  tsp: {metric: '5ml', imperial: '1 tsp'},
  g: {metric: '1g', imperial: '0.035oz'},
  kg: {metric: '1kg', imperial: '2.2lb'},
  ml: {metric: '1ml', imperial: '0.034 fl oz'},
}

function RecipeDetail() {
  const {id} = useParams()
  const recipe = sampleRecipes.find(r => r.idMeal === id)
  const [unitSystem, setUnitSystem] = useState('metric')

  const getConvertedIngredient = ingredient => {
    const [amount, unit, ...rest] = ingredient.split(' ')
    const key = unit?.toLowerCase()
    const conversion = unitConversion[key]?.[unitSystem]
    if (conversion) {
      return `${conversion} ${rest.join(' ')}`
    }
    return ingredient
  }

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
                  <li key={ingredient}>{getConvertedIngredient(ingredient)}</li>
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
