import React, { Component } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import { v4 as uuidv4 } from 'uuid'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { messages: [] }
        this.addTodo = this.addTodo.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
    }
    
    addTodo(item) {
        let newMessages = [ ...this.state.messages, item.message]
        this.setState({ messages: newMessages })
    }

    removeTodo(id) {
        let removedMessages = this.state.messages.filter(message => {
            return message.id !== id
        })
        this.setState({ messages: removedMessages })
    }

    render() {
        const boxes = this.state.messages.map(message => {
            const key = uuidv4()
            return <Todo key={key} id={key} message={message} removeTodo={this.removeTodo} />
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