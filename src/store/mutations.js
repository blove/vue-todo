export const STORAGE_KEY = 'todos';

// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  window.localStorage.clear();
}

export const ADD_TO_DO = 'addTodo';
export const CLEAR_TO_DOS = 'clearTodos';
export const COMPLETE_TO_DO = 'completeTodo';
export const INCOMPLETE_TO_DO = 'incompleteTodo';
export const REMOVE_TO_DO = 'removeTodo';

export const mutations = {
  [ADD_TO_DO]: function(state, todo) {
    todo.id = Math.random();
    if (!todo.complete) {
      todo.complete = false;
    }
    state.todos.push(todo);
  },

  [CLEAR_TO_DOS]: function(state) {
    state.todos = [];
  },

  [COMPLETE_TO_DO]: function(state, todo) {
    todo.complete = true;
  },

  [INCOMPLETE_TO_DO]: function(state, todo) {
    todo.complete = false;
  },

  [REMOVE_TO_DO]: function(state, todo) {
    const i = state.todos.map(todo => todo.id).indexOf(todo.id);
    if (i === -1) {
      return;
    }
    state.todos.splice(i, 1);
  }
};
