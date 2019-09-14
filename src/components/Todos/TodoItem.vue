<template>
  <li>
    <span class="todo-idx">{{todo.id}}</span>
    <p class="todo-title" v-text="todo.title">
    </p>
    <button class="btn btn-sm btn-info" @click="delTodo(todo.id)">삭제</button>
    <div class="todo-content" v-html="todo.content">
    </div>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    delTodo: function (id) {
      console.log('del id form TodoItem : ' + id)
      this.$emit('del-todo', id)
    }
  }
}
</script>

<style scoped>
li { list-style: none; }
.todo-idx { display:inline-block; width:18px; height:18px; border-radius: 9px; border:1px solid purple; color:purple; }
.todo-title { display:inline-block;margin-top:10px; }
</style>
