import '@babel/polyfill';

import './plugins/vuetify';

import Vue from 'vue';

import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  store,
  created: function() {
    this.$store.dispatch('clearTodos');
    const initialTodos = [
      {
        task: 'Watch Ozark Season 2',
        complete: false
      },
      {
        task: 'Use Vuex in my awesome app',
        complete: true
      }
    ];
    for (const todo of initialTodos) {
      this.$store.dispatch('addTodo', todo);
    }
  },
  render: h => h(App)
}).$mount('#app');
