import React, { Component } from 'react'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = { message: "" }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(evt) {
        this.setState({ message: evt.target.value })
    }

    handleSubmit(evt) {
        evt.preventDefault()
        this.props.addTodo(this.state)
        this.setState({ message: "" })
    }

    render() {
        return (
            <div className='TodoForm'>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='text'
                        placeholder='new item'
                        value={this.state.message}
                        onChange={this.handleChange}
                    />
                <button>Add item to list</button>
                </form>
            </div>
        )
    }
}

export default TodoForm