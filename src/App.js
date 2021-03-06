import React, { Component } from 'react';
import './App.css';

import Form from './components/Form'
import Recipes from './components/Recipes'


class App extends Component {
  state = {
    recipes: []
  }

  //method to fetch the api
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value
    e.preventDefault()

    const api_call = await fetch(`https://api.edamam.com/search?app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&q=${recipeName}&from=0&to=12`)
    const data = await api_call.json()
    // console.log(data.hits);
    this.setState({ recipes: data.hits})
    // console.log(this.state.recipes);
  }

  componentDidMount = () => {
    //grab our stored item
    //this is in string format
    const json = localStorage.getItem("recipes")

    // we need to convert it in json
    const recipes = JSON.parse(json)
    this.setState({ recipes: recipes })

  }
  

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes)
    //mettre dans ls
    localStorage.setItem("recipes", recipes)
  }
  

  render() {
    const { recipes } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
        
        <Recipes recipes={recipes}/>
      </div>
    );
  }
}

export default App;