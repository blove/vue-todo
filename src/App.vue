<template>
  <v-app class="app">
    <v-content>
      <v-flex xs12 sm8 offset-sm2 md6 offset-md3>
        <h1>Hello</h1>
        <v-card class="todo-card">
          <v-card-title primary-title>
            <h1>To Do List</h1>
          </v-card-title>
          <todo-list v-if="incompleteTodos.length > 0" :todos="incompleteTodos" @change="onChange"></todo-list>
          <div v-else class="text-xs-center">
            <h4>All Done! 🏖</h4>
          </div>
        </v-card>
        <v-card class="todo-card">
          <v-card-title primary-title>
            <h1>Add To Do</h1>
          </v-card-title>
          <todo-form :todo="todo"></todo-form>
          <v-card-actions class="actions">
            <v-btn @click="onAdd" color="primary">Add</v-btn>
          </v-card-actions>
        </v-card>
        <v-card v-if="completeTodos.length" class="todo-card">
          <v-card-title primary-title>
            <h1>Completed! 👏</h1>
          </v-card-title>
          <todo-list :todos="completeTodos" @change="onChange"></todo-list>
        </v-card>
      </v-flex>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>Angular 💚 Vue</span>
    </v-footer>
  </v-app>
</template>

<script>
import TodoForm from '@/components/TodoForm.vue';
import TodoList from '@/components/TodoList.vue';
import { ADD_TO_DO, COMPLETE_TO_DO, INCOMPLETE_TO_DO } from './store/mutations';

export default {
  name: 'App',
  components: {
    TodoForm,
    TodoList
  },
  // beforeMount: function() {
  //   console.log(this.name);
  // },
  data() {
    return {
      fixed: false,
      todo: {
        task: null
      }
    };
  },
  methods: {
    onAdd: function() {
      this.$store.dispatch(ADD_TO_DO, this.todo);
    },
    onChange(todo) {
      if (todo.complete) {
        this.$store.dispatch(COMPLETE_TO_DO, todo);
      } else {
        this.$store.dispatch(INCOMPLETE_TO_DO, todo);
      }
    }
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
    completeTodos() {
      return this.todos.filter(todo => todo.complete);
    },
    incompleteTodos() {
      return this.todos.filter(todo => !todo.complete);
    }
  }
};
</script>

<style lang="scss" scoped>
.app {
  padding: 20px;

  .todo-card {
    margin: 20px 0;
    padding: 20px;

    .actions {
      flex-direction: row;
      justify-content: flex-end;
    }
  }
}
</style>
