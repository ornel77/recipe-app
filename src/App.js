import React, { Component } from 'react';
import './App.css';

import Form from './components/Form'
import Recipes from './components/Recipes'

const APP_ID = '687ef488'
const APP_KEY = "9fe05ea4329e9c9442b5a5a308426df9"

class App extends Component {
  state = {
    recipes: []
  }

  //method to fetch the api
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value
    e.preventDefault()

    const api_call = await fetch(`https://api.edamam.com/search?app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&q=${recipeName}&from=0&to=10`)
    const data = await api_call.json()
    // console.log(data.hits);
    this.setState({ recipes: data.hits})
    console.log(this.state.recipes);
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