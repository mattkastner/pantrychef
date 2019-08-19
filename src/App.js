import React, {Component} from 'react'

import Navbar from './components/Navbar/Navbar'
import CreateRecipe from './components/CreateRecipe/CreateRecipe'
import DisplayRecipes from './components/DisplayRecipes/DisplayRecipes'

import axios from 'axios'

import 'reset-css'
import './App.css'

export default class App extends Component {
  constructor(){
    super()

    this.state = {
      recipes: [],
      recipe: {}
    }
  }

  //lifecycle methods
  componentDidMount(){
    console.log("mounted")
    //get the users
    this.getRecipes()
  }

  getRecipes = () => {
    console.log("cool1")
    axios.get('/api/recipes').then((res) => {
      this.setState({
        recipes: res.data
      })
    }).catch((error) => {
      console.log(error);
    });
  }

  addRecipe = (obj) => {
    console.log("fired add")
    axios.post('/api/recipes', obj).then(res => {
        this.setState({
          recipes: res.data,
          recipe: {}
        })
      }).catch((error) => {
        console.log(error);
      });
  };

  deleteRecipe = (id) => {
    axios.delete(`/api/recipes/${id}`).then(res => {
      console.log(res.data)
        this.setState({
          recipes: res.data
        })
      }).catch((error) => {
        console.log(error);
      });
  }

  updateRecipe = (id, obj) => {
    axios.put(`/api/recipes/${id}`, obj).then(res => {
        this.setState({
          recipes: res.data
        })
      }).catch((error) => {
        console.log(error);
      });
  }

  render(){
    return (
      <div className="app-container">
        <Navbar />
        <div className="create-recipe-display-container">
          <CreateRecipe addRecipe={this.addRecipe}/>
          <DisplayRecipes recipes={this.state.recipes} updateRecipe={this.updateRecipe} deleteRecipe={this.deleteRecipe}/>
        </div>
      </div>
    )
  }
  
}
