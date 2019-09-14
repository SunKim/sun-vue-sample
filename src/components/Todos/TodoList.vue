<template>
  <ul v-if="todos.length">
    <todo-item v-for="todo in todos" :key="todo.id" :todo="todo" @del-todo="delTodo(todo.id)" v-if="todo.isSearched"></todo-item>
  </ul>
  <p v-else>
    No todos left
  </p>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
  name: 'TodoList',
  props: {
    todos: Array
  },
  data: function () {
    return {

    }
  },
  methods: {
    delTodo: function (id) {
      console.log('del id form TodoList : ' + id)
      this.$emit('del-todo', id)
    }
  },
  components: {
    TodoItem
  }
}
</script>

<style scoped>
</style>
