import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './TodoForm.css'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = { task: "", id: "" }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(evt) {
        this.setState({ task: evt.target.value })
    }

    handleSubmit(evt) {
        evt.preventDefault()
        this.props.addTodo({task: this.state.task, id: uuidv4() })
        this.setState({ task: "", id: "" })
    }

    render() {
        return (
            <div>
                <form className='TodoForm' onSubmit={this.handleSubmit}>
                    <input 
                        type='text'
                        placeholder='Add To-Do'
                        value={this.state.task}
                        onChange={this.handleChange}
                    />
                <button>Add item</button>
                </form>
            </div>
        )
    }
}

export default TodoForm