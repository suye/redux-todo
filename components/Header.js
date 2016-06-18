import React, {Component, PropType} from 'react';
import TodoTextInput from './TodoTextInput';

class Header extends Component{

	render(){
		return(
			<header className="header">
				<h1>todos</h1>
				<TodoTextInput
					onSave={this.props.addTodo}
					placeholder="What needs to be done?"/>
			</header>
		);
	}
}
export default Header;