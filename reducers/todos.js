const initialState = [{
	id: 0,
	text: "Use Redux",
	completed: false
}];
export default function todos(state = initialState,action){
	
	switch(action.type){
		case "ADD_TODO":
			return [
				{
					id: state.reduce((maxId,todo) => Math.max(todo.id,maxId),-1) + 1,
					text: action.text,
					completed: false
				},
				...state
			];
		case "EDIT_TODO":
			return state.map((todo) =>
				todo.id == action.id ? Object.assign({},todo,{text: action.text}) : todo
				
			);
		case "DEL_TODO":
			return state.filter((todo) =>
				todo.id != action.id
			);
		case "TOGGLE_TODO":
			return state.map((todo) =>
				todo.id == action.id ? Object.assign({},todo,{completed: !todo.completed}) : todo
			);
		case "TOGGLE_ALL":
			return state.map((todo) =>
				Object.assign({},todo,{completed: !todo.completed})
			);
		case "CLEAR_COMPLETED":
			return state.filter((todo) => !todo.completed);
		default:
			return state;
	}
}