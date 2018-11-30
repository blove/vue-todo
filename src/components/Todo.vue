<template>
  <v-list-tile>
    <v-list-tile-action>
      <v-checkbox v-model="todo.complete" @change="$emit('change', todo)"></v-checkbox>
    </v-list-tile-action>
    <v-list-tile-content>
      <v-list-tile-title v-bind:class="{complete: todo.complete}">{{ todo.task }}</v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
  name: "todo",
  props: {
    todo: Object
  }
};
</script>

<style lang="scss" scoped>
.complete {
  text-decoration: line-through;
}
</style>
