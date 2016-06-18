import React, {Component, PropType} from 'react';
import {SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} from '../constants/TodoFilters'
import classnames from 'classnames';

const FILTERS = {
	[SHOW_ALL]: "All",
	[SHOW_ACTIVE]: "Active",
	[SHOW_COMPLETED]: "Completed"
};
class Footer extends Component{

	renderCompleted(completedCount){
		if(completedCount > 0){
			return (
				<button className="clear-completed" onClick={this.props.clearCompleted}>Clear completed</button>
			);
		}
	}
	render(){
		const {completedCount, count, filter} = this.props;
		return (
			<footer className="footer">
				<span className="todo-count">
					<strong>{count > 0 ? count : "No"}</strong>
					{' '}
					<span>{count > 1 ? "items" : "item"}</span>
					{' '}
					<span>left</span>
				</span>
				<ul className="filters">
					{
						[SHOW_ALL,SHOW_ACTIVE,SHOW_COMPLETED].map((filterItem) =>
							<li key={filterItem}>
								<a className={classnames({"selected":filterItem == filter})} style={{cursor:"pointer"}} onClick={() => this.props.filterTodo(filterItem)}>{FILTERS[filterItem]}</a>
							</li>
						)
					}
				</ul>
				{this.renderCompleted(completedCount)}
			</footer>
		);
	}
}
export default Footer;