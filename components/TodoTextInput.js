import React, {Component, PropType} from 'react';
import classnames from 'classnames';

class TodoTextInput extends Component{
	constructor(props){
		super(props);
		
		this.state = {
			text: this.props.text || "",
			edit: this.props.text ? true : false
		}
	}
	handleSave(e){
		var text = e.target.value.trim();
		if(e.keyCode == 13 && text.length > 0){
			this.props.onSave(text);
			this.setState({text: ""});
		}
	}
	handleChange(e){
		this.setState({text: e.target.value});
	}
	handleBlur(e){
		if(this.state.edit){
			this.props.onSave(e.target.value);

		}
	}
	render(){
		return(
			<input 
				type="text" 
				value={this.state.text} 
				onChange={(e) => this.handleChange(e)} 
				onKeyUp={(e) => this.handleSave(e)} 
				onBlur={(e) => this.handleBlur(e)}
				className={classnames({"new-todo": !this.state.edit},{"edit": this.state.edit})} 
				placeholder={this.props.placeholder}/>
		);
	}
}
export default TodoTextInput;