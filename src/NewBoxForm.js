import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

class NewBoxForm extends Component {
    constructor(props) {
        super(props)
        this.state={
            height:"",
            width:"",
            backgroundColor:""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(evt){
        evt.preventDefault()
        const newBox = {...this.state, id:uuidv4()}
        this.props.createBox(newBox)
        this.setState({
            height:"",
            width:"",
            backgroundColor:""
        })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='height'>Height</label>
                        <input
                            type='text'
                            name='height'
                            value={this.state.height}
                            id='height'
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='width'>Width</label>
                        <input
                            type='text'
                            name='width'
                            value={this.state.width}
                            id='width'
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='backgroundColor'>Background color</label>
                        <input
                            type='text'
                            name='backgroundColor'
                            value={this.state.backgroundColor}
                            id='backgroundColor'
                            onChange={this.handleChange}
                        />
                    </div>
                    <button>Add a box</button>
                </form>
            </div>
        )
    }
}

export default NewBoxForm