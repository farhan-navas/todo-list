import React, { Component } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import { v4 as uuidv4 } from 'uuid'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { messages: [] }
        this.addTodo = this.addTodo.bind(this)
    }
    
    addTodo(message) {
        console.log("adding todo!")
        let newMessage = [ ...this.state.messages, message]
        this.setState({ messages: newMessage })
    }

    render() {
        const boxes = this.state.messages.map(message => {
            const key = uuidv4()
            return <Todo key={key} id={key} message={message} />
        })
        return (
            <div className='TodoList'>
                <h3 className='TodoList-header'>Todo List!</h3>
                <div className='TodoList-description'>Simple Todo list made using CRA</div>
                <div className='TodoList-boxes'>
                    {boxes}
                </div>
                <TodoForm addTodo={this.addTodo} />
            </div>
        )
    }
}

export default TodoList