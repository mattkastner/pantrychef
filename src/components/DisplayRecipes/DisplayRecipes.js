import React, {Component} from 'react'
import Recipe from './Recipe/Recipe'

import './DisplayRecipes.css'

class DisplayRecipes extends Component {
    constructor(){
        super()

        this.state = {
            isEdit: false,
            title: '',
            desc: '',
            directions: '',
            img: ''
        }
    }

    render(){
        let htmlRecipes 
        if(this.props.recipes.length > 0){
            htmlRecipes = this.props.recipes.map((e, index) => {
                return (
                    <Recipe key={index} recipe={e} updateRecipe={this.props.updateRecipe} deleteRecipe={this.props.deleteRecipe}/>
                )
            })
        }
        return (
            <div className="recipes-container">
            {htmlRecipes}
            </div>
        )
    }
}

export default DisplayRecipes