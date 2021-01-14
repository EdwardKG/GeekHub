import React, { PureComponent } from 'react'
import TodoList from './Todo/TodoList'
import Context from './context'


		
class App extends PureComponent  {
	state = {
		list: [
			{id: 0, completed: false, title: 'to buy some bread'},
			{id: 1, completed: false, title: 'to buy some butter'},
			{id: 2, completed: false, title: 'to buy some milk'}
		]}

		inputRef = React.createRef()

		addTodo = (e) => {
			 e.preventDefault();
			 const input = this.inputRef.current;
  
			 if (input.value.trim()) {
				  this.state.list.forEach(item => item.id++)
  
				  this.setState({
						list: [{id: 0, completed: false, title: input.value }, ...this.state.list,]
				  })
				  input.value = ''
			 }
		}
  
		toggleTodo = (id) => {
			 this.state.list[id].completed = !this.state.list[id].completed
			 this.setState({list: [...this.state.list]})
		}
  
		removeTodo = (id) => {
			 const newList = this.state.list.filter(elem => elem.id !== id)
			 newList.forEach(item => item.id = newList.indexOf(item))
			 this.setState({list: [...newList]})
		}
  
		render() {
			 const list = this.state.list
			 return(
				<Context.Provider>
						<form onSubmit = {this.addTodo} >
							 <input ref = {this.inputRef} type='title' placeholder='Add todo' className='input-text' />
							 <span className='bar'></span>
						</form>
  
						{this.state.list.length ? <TodoList list = {list} removeTodo = {this.removeTodo} toggleTodo = {this.toggleTodo} /> : <p>No Todos!</p>}
				</Context.Provider>
			 )
	}
}

export default App;