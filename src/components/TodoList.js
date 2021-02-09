// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'

class TodoList extends React.Component {

    render(){
        return(
            <ul className="todoList">
                {
                this.props.data.map(item => {
                    return <li key={item.id}>{item.task}</li>
                })
                }
            </ul>
            
            )
    }
}

export default TodoList