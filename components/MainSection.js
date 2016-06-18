import React, {Component, PropType} from 'react';
import TodoItem from './TodoItem';
import Footer from './Footer';
import {SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} from '../constants/TodoFilters'

const FILTER_TODOS = {
	[SHOW_ALL]: (todo) => true,
	[SHOW_ACTIVE]: (todo) => !todo.completed,
	[SHOW_COMPLETED]: (todo) => todo.completed
};
class MainSection extends Component{
	
	constructor(props){
		super(props);
		this.state = {
			filter: SHOW_ALL
		};
	}
	renderTodo(todo){
		const {actions} = this.props;
		
		return (
			
			<TodoItem todo={todo} key={todo.id} {...actions}></TodoItem>
			
		);
		
	}
	renderFooter(){
		const {todos, actions} = this.props;
		const completedCount = todos.reduce((count, todo) => todo.completed ? count + 1 : count,0);
		const count = todos.length - completedCount;
		
		if(todos.length > 0){
			return <Footer completedCount={completedCount} count={count} filter={this.state.filter} filterTodo={(filterItem) => this.filterTodo(filterItem)} clearCompleted={actions.clearCompleted}/>
		}
	}
	filterTodo(filterItem){
		this.setState({filter:filterItem});
	}
	render(){
		const {todos, actions} = this.props;
		
		const filterTodos = todos.filter(FILTER_TODOS[this.state.filter])
		console.log(filterTodos);	
		
		return (
			<section className="main">
				<input type="checkbox" onChange={() => actions.toggleAll()} className="toggle-all"/>
				<ul className="todo-list">
					{filterTodos.map((todo) =>
						this.renderTodo(todo)
					)}
				</ul>
				
				{this.renderFooter()}
			</section>
		);
	}
}
export default MainSection;