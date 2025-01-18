import React, { Component } from 'react'

class Box extends Component{

    render(){
        const appliedStyle ={
            backgroundColor: this.props.backgroundColor,
            width: `${this.props.width}em`,
            height: `${this.props.height}em`
        }

        return(
            <div style={appliedStyle}>
                <button onClick={this.props.removeBox}>X</button>
            </div>
            
        )
    }
}

export default Box