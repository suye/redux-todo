import React, {Component,PropType} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as TodoActions from '../actions/index';
import Header from '../components/Header';
import MainSection from '../components/MainSection';

class App extends Component{
	render(){
		const {todos,actions} = this.props;
		
		return (
			<div>
				<Header addTodo={actions.addTodo}></Header>
				<MainSection todos={todos} actions={actions}/>
				
			</div>
		);
	}
}
function mapStateToProps(state){
	return {
		todos: state.todos
	}
}

function mapDispatchToProps(dispatch){
	return{
		actions: bindActionCreators(TodoActions,dispatch)
	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);