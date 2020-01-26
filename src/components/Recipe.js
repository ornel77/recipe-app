import React, { Component } from 'react'

import {Link} from 'react-router-dom'

class Recipe extends Component {
    state = {
        activeRecipe: []
    }

    componentDidMount = async () => {
        const title = this.props.location.state.recipe
        console.log(title);

        const req = await fetch(`https://api.edamam.com/search?app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&q=${title}`)
        const res = await req.json()
        console.log(res.hits);

        this.setState({ activeRecipe: res.hits[0].recipe })
        console.log(this.state.activeRecipe);
    }
    
    render() {
        // console.log(this.props) ;
        const { activeRecipe }  = this.state
        return (
            <div className="container">
                {
                    activeRecipe.length !== 0 &&
                    <div className="active-recipe">
                        <img className="active-recipe__img"  src={ activeRecipe.image } alt={ activeRecipe.label }/>
                        <h3 className="active-recipe__title">{ activeRecipe.label }</h3>
                        <h4 className="active-recipe__publisher">
                            Publisher: <span> {activeRecipe.source}</span>
                        </h4>
                        <p className="active-recipe__website">
                            Website: <span> <a href={activeRecipe.url} >{activeRecipe.url} </a></span>
                        </p>
                        <p className="active-recipe__website">
                            Ingredient List : 
                            <ul>
                                <li>bb</li>
                                <li>vb</li>
                                <li>vbc</li>
                            </ul>
                        </p>
                        <button className="active-recipe__button">
                            <Link to="/">Go Home</Link>
                        </button>
                    </div>
                }
            </div>
        )
    }
}

export default Recipe
