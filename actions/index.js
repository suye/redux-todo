import * as types from '../constants/ActionType';
export function addTodo(text){
	return {type:types.ADD_TODO,text:text};
}
export function editTodo(id,text){
	return{type: types.EDIT_TODO,id: id,text: text};
}
export function delTodo(id){
	return{type: types.DEL_TODO,id: id};
}
export function toggleTodo(id){
	return{type: types.TOGGLE_TODO,id: id};
}
export function toggleAll(){
	return{type: types.TOGGLE_ALL};
}
export function clearCompleted(){
	return{type: types.CLEAR_COMPLETED};
}