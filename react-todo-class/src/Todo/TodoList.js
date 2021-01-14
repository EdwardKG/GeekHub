import React, {PureComponent} from 'react';
import TodoItem from './TodoItem';

class TodoList extends PureComponent {
    render() {
        const {list, removeTodo, toggleTodo} = this.props;

        return(
            <ul>
                {	
                    list.map((todo, i) => {
                        return <TodoItem todo = {todo} key = {i} removeTodo = {removeTodo} toggleTodo = {toggleTodo} />
                    })
                }
            </ul>
        )
    }
}

export default TodoList