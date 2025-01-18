import React, { Component } from 'react'
import Box from './Box'
import NewBoxForm from './NewBoxForm'

class BoxList extends Component{
    constructor(props){
        super(props)
        this.state = {
            boxes: []
        }
        this.create = this.create.bind(this)
        this.delete = this.delete.bind(this)
    }

    create(newBox){
        this.setState({
            boxes: [...this.state.boxes, newBox]
        })
    }

    delete(id){
        this.setState({
            boxes: this.state.boxes.filter(box=> box.id !== id)
        })
    }

    render(){
        const boxes = this.state.boxes.map(box => (
            <Box key={box.id} width={box.width} height={box.height} backgroundColor={box.backgroundColor} id={box.id} removeBox={()=>this.delete(box.id)}/>
        ));
        return (
            <div>
                <NewBoxForm createBox={this.create}/>
                {boxes}
            </div>
        )
    }
}

export default BoxList