import React from 'react'

const Recipes = ({ recipes }) => {
    return (
        <div className="container" >
            <div className="row">
                { recipes.map((recipe, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="recipes__box">
                            <img 
                                src={recipe.recipe.image} 
                                alt={recipe.recipe.label}
                                className="recipe__box-img"
                            />
                            <div className="recipe__text">
                                <h5 className="recipes__title">
                                    { recipe.recipe.label.length < 27 ? `${recipe.recipe.label}` : `${recipe.recipe.label.substring(0, 22)}...` }
                                </h5>
                                <p className="recipes__subtitle">Publisher: <span>{ recipe.recipe.source }</span></p>
                            </div>
                            <button className="recipe_buttons" >View Recipe</button>
                        </div>
                    </div>
                )) }
            </div>
        </div>
        
    )
}

export default Recipes
