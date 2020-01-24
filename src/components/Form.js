import React from 'react'

const Form = (props) => {
    const {getRecipe} = props
    return (
        <form onSubmit={getRecipe}>
            <input type="text" name="recipeName"/>
            <button>Search</button>
        </form>
    )
}



export default Form
