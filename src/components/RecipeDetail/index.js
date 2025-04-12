import React, {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'
import './index.css'

function RecipeDetail() {
  const {id} = useParams()
  const [recipe, setRecipe] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
        )
        if (response.data.meals && response.data.meals.length > 0) {
          setRecipe(response.data.meals[0])
        } else {
          setError('Recipe not found.')
        }
      } catch (err) {
        setError('Failed to fetch recipe details.')
        console.error('API Error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchRecipeDetails()
  }, [id])

  if (loading) {
    return <div>Loading recipe details...</div>
  }

  if (error) {
    return (
      <div>
        Error: {error} <Link to="/">Go back to recipes</Link>
      </div>
    )
  }

  if (!recipe) {
    return (
      <div>
        Recipe not found. <Link to="/">Go back to recipes</Link>
      </div>
    )
  }

  const ingredients = []
  for (let i = 1; i <= 20; i += 1) {
    const ingredient = recipe[`strIngredient${i}`]
    const measure = recipe[`strMeasure${i}`]

    if (ingredient && ingredient.trim() !== '') {
      ingredients.push({name: ingredient, measure}) // Store ingredient as an object
    }
  }

  return (
    <div className="recipe-details-container">
      <h2>{recipe.strMeal}</h2>
      {recipe.strMealThumb && (
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="recipe-image-details"
        />
      )}
      <div className="recipe-info-details">
        {recipe.strCategory && <p>Category: {recipe.strCategory}</p>}
        {recipe.strArea && <p>Cuisine: {recipe.strArea}</p>}
      </div>
      <h3>Ingredients:</h3>
      <ul>
        {ingredients.map(ingredient => (
          <li key={ingredient.name}>
            {`${ingredient.measure} ${ingredient.name}`}
          </li>
        ))}
      </ul>

      <h3>Instructions:</h3>
      <p className="recipe-instructions">{recipe.strInstructions}</p>
      <Link to="/">Back to Recipes</Link>
    </div>
  )
}

export default RecipeDetail
