// Reducers take the current state and the action trigger and determine what the state should update to and returns the updated state
import { CREATE_TODO, REMOVE_TODO } from './actions';


export const todos = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
    case CREATE_TODO: {
        const {text} = payload;
        const newTodo = {
            text,
            isCompleted: false,
        };
        return state.concat(newTodo);
    }
    case REMOVE_TODO: {
        const {text} = payload;
        return state.filter(todo => todo.text !== text);
    }
    default:
        return state;

    }
}