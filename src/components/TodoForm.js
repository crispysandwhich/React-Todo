import React from 'react'

class TodoForm extends React.Component {

    render() {
        return (
            <form className="deForm" onSubmit={this.onSubmit}>
                <input type="text" name="task" placeholder="Write a new Task" onChange={this.onChange} />
                <button>🎁</button>
            </form>
        )
    }
}