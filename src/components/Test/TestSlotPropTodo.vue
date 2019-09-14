<template>
  <ul>
    <li
      v-for="todo in todos"
      v-bind:key="todo.id"
      class="todo-item"
    >
      <!--
      We have a slot for each todo, passing it the
      `todo` object as a slot prop.
      -->
      <slot name="todo" v-bind:todo="todo">
        <!-- Fallback content -->
        {{ todo.title }}
      </slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TestSlotPropTodo',
  props: {
    todos: Array
  }
}
</script>

<style scoped>
.todo-item { padding:10px; border:1px solid grey; }
</style>
