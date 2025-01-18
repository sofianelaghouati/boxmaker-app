import React, { Component } from 'react'

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
        this.props.createBox(this.state)
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