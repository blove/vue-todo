<template>
  <v-form>
    <v-text-field v-model="todo.task" label="Task" required></v-text-field>
  </v-form>
</template>

<script>
export default {
  name: "todo-form",
  props: {
    todo: Object
  }
};
</script>