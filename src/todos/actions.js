export const CREATE_TODO = 'CREATE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

// Action Creator for creating item
export const createTodo = text => ({
    type: CREATE_TODO,
    payload: { text },
});

// Action Creator for removing item
export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: { text },
});