import React, {Component, PropType} from 'react';
import TodoTextInput from './TodoTextInput';
import classnames from 'classnames';

class TodoItem extends Component{

	constructor(props){
		super(props);
		this.state = {
			edit: false
		}
	}

	handleDouble(){
		this.setState({edit: true});
	}
	editTodo(id,text){
		this.props.editTodo(id,text);
		this.setState({edit: false});
	}
	handleDel(id){
		this.props.delTodo(id);
	}
	toggleTodo(id){
		this.props.toggleTodo(id);
	}
	render(){
		const {todo} = this.props;
		if(!this.state.edit){
			return(
				<li className={classnames({"completed": todo.completed})}>
					<div className="view" onDoubleClick={() => this.handleDouble()}>
						<input type="checkbox"  className="toggle" checked={todo.completed ? "checked" : ""} onChange={() => this.toggleTodo(todo.id)}/>
						<label>{todo.text}</label>
						<button className="destroy" onClick={() => this.handleDel(todo.id)}></button>
					</div>
				</li>
			);
		}else{
			return (
				<li className={classnames({"editing": this.state.edit})}>
					<TodoTextInput text={todo.text} onSave={(text) => this.editTodo(todo.id,text)}/>
				</li>
			);
		}
		
	}
}
export default TodoItem;