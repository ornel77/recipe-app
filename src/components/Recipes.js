import React from 'react'

const Recipes = ({ recipes }) => {
    return (
        <div>
            { recipes.map((recipe, index) => (
                <div key={index}>
                    <img src={recipe.recipe.image} alt={recipe.recipe.label}/>
                    <p>{recipe.recipe.label}</p>
                </div>
            )) }
        </div>
        
    )
}

export default Recipes
