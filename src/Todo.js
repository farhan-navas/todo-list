import React, { Component } from 'react'

class Todo extends Component {
    // constructor(props) {
    //     super(props);
    //     this.handleClick = this.handleClick
    // }
    
    // handleClick() {

    // }

    render() {
        return (
            <div>
                <div className='Todo'>
                    {this.props.message}
                </div>
                <button>X</button>
            </div>
        )
    }
}

export default Todo