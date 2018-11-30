import {
  ADD_TO_DO,
  CLEAR_TO_DOS,
  COMPLETE_TO_DO,
  INCOMPLETE_TO_DO,
  REMOVE_TO_DO
} from './mutations';

export default {
  addTodo({ commit }, todo) {
    commit(ADD_TO_DO, todo);
  },

  clearTodos({ commit }) {
    commit(CLEAR_TO_DOS);
  },

  completeTodo({ commit }, todo) {
    commit(COMPLETE_TO_DO, todo);
  },

  incompleteTodo({ commit }, todo) {
    commit(INCOMPLETE_TO_DO, todo);
  },

  removeTodo({ commit }, todo) {
    commit(REMOVE_TO_DO, todo);
  }
};
