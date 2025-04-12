import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

function RecipeCard({recipe}) {
  return (
    <div className="recipe-card">
      {recipe.strMealThumb && (
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      )}
      <h3 className="recipe-title">{recipe.strMeal}</h3>
      <div className="recipe-actions">
        <Link to={`/recipe/${recipe.idMeal}`} className="view-details-link">
          View Details
        </Link>
      </div>
    </div>
  )
}

export default RecipeCard
