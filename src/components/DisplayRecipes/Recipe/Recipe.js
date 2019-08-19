import React, {Component} from 'react'

import * as Icon from 'react-feather'
import './Recipe.css'

export default class Recipe extends Component {
    constructor(){
        super()

        this.state = {
            title: '',
            desc: '',
            directions: '',
            img: '',
            isEdit: false
        }
    }

    submitChanges = () => {
        let obj = {
            id: this.props.recipe.id,
            title: this.state.title, 
            desc: this.state.desc,
            directions: this.state.directions,
            img: this.state.img
        }
        this.setState({isEdit: !this.state.isEdit})
        this.props.updateRecipe(this.props.recipe.id, obj)
    }

    render(){
        return(
            <div className="recipe-info-box">
                {this.state.isEdit ? 
                    <div className="recipe-edit">
                        <div className="recipe-info"> 
                            <div className="x-icon-container">
                                <Icon.XCircle onClick={() => this.props.deleteRecipe(this.props.recipe.id)} color='#FF5252' size="20"/>
                            </div>
                            <div className="image-text-box" id="edit-text">
                                <h1>Edit the recipe</h1>
                                <div>
                                    <input value={this.state.title} placeholder="title" onChange={(e) => this.setState({title:e.target.value})}/>
                                </div>
                                <div>
                                    <input value={this.state.desc} placeholder="description" onChange={(e) => this.setState({desc:e.target.value})}/>
                                </div>
                                <div>
                                    <textarea value={this.state.directions} placeholder="directions" onChange={(e) => this.setState({directions:e.target.value})}/>
                                </div>
                                <div>
                                    <textarea value={this.state.img} placeholder="image URL" onChange={(e) => this.setState({img:e.target.value})}/>
                                </div>
                            </div>
                            <button className="edit-link" id="submit" onClick={this.submitChanges}>submit</button>
                        </div> 
                    </div>  
                    :
                    <div className="recipe-info"> 
                        <div className="x-icon-container">
                            <Icon.XCircle onClick={() => this.props.deleteRecipe(this.props.recipe.id)} color='#FF5252' size="20"/>
                        </div>
                        <div className="image-text-box">
                            <img src={this.props.recipe.img} alt="recipe"/>
                            <div className="recipe-text">
                                <p className="title">{this.props.recipe.title}</p>
                                <p className="desc">{this.props.recipe.desc}</p>
                            </div>
                        </div>
                        <p>{this.props.recipe.directions}</p>
                        <button className="edit-link" onClick={() => this.setState({isEdit: !this.state.isEdit})}>edit</button>
                    </div>
                }
            </div>
        )
    }
}