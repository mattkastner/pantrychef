import React, {Component} from 'react'

import './CreateRecipe.css'

export default class CreateRecipe extends Component {
    constructor(){
        super()

        this.state = {
            title: '',
            desc: '',
            directions: '',
            img: ''
        }
    }

    clearData = () => {
        let obj = this.state
        this.setState({
            title: '',
            desc: '',
            directions: '',
            img: ''
        })
        this.props.addRecipe(obj)
    }

    render(){
        return(
            <div className="create-recipe-inputs">
                <h1>Create a <em>NEW</em> recipe!</h1>
                <div>
                    <input className="title" placeholder="Meal name..." value={this.state.title} onChange={(e) => this.setState({title:e.target.value})}/>
                </div>
                <div>
                    <textarea className="desc" placeholder="Brief description..." value={this.state.desc} onChange={(e) => this.setState({desc:e.target.value})}/>
                </div>
                <div>
                    <textarea className="directions" placeholder="Cooking directions..." value={this.state.directions} onChange={(e) => this.setState({directions:e.target.value})}/>
                </div>
                <div>
                    <input className="image" placeholder="image URL..." value={this.state.img} onChange={(e) => this.setState({img:e.target.value})}/>
                </div>
                <div className="btn-container">
                    <button className="create-recipe-btn" onClick={this.clearData}>create recipe</button>
                </div>
            </div>
        )
    }
}