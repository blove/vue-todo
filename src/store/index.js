import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import { STORAGE_KEY, mutations } from './mutations';
import plugins from './plugins';

Vue.use(Vuex);

export default new Vuex.Store({
  debug: true,
  state: {
    todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
  },
  actions,
  mutations,
  plugins
});
