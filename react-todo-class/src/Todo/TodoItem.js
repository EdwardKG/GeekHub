import React, { Component } from 'react'

class TodoItem extends Component {
	render() {
		 const {id, completed, title} = this.props.todo
		 const removeTodo = this.props.removeTodo
		 const toggleTodo = this.props.toggleTodo

		 const classes = []	

		 if(completed) {
			classes.push('done')
			}


		 return(
			  <li>
					<p>
						 <span className='id'>{id + 1}.</span> 
						 <input
							  type='checkbox'
							  checked = {completed}
							  onChange = {() => {toggleTodo(id)}}
						 /> 
						 <span className = {classes.join(' ')}>{title}</span>
						 <button className="rm" onClick={() => {removeTodo(id)}}>&times;</button>
					</p>
			  </li>
		 )
	}
}

export default TodoItem