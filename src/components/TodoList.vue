<template>
  <v-list>
    <todo v-for="todo in todos" :key="todo.id" :todo="todo" @change="$emit('change', $event)"></todo>
  </v-list>
</template>

<script>
// @ is an alias to /src
import Todo from "@/components/Todo.vue";

export default {
  name: "todo-list",
  components: {
    Todo
  },
  props: {
    todos: Array
  }
};
</script>
