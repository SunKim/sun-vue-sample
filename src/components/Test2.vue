<template>
  <div class="container">
    <!-- todo component test -->
    <div class="screen-container">
      <h1>Component test2</h1>
      <p class="desc">TodoList / TodoItem을 모두 Component로 작성. 부모에서 prop 변경시 자식이 watch</p>
      <p class="pb20">데이터는 created hooker에서 axios.get 으로 서버로부터 받아옴</p>

      <custom-input ref="filterText" placeholder="SEARCH..." v-model="filterText"></custom-input>
      <button class="btn btn-sm btn-primary" @click="clearFilter">검색초기화</button>
      <button class="btn btn-sm btn-secondary" @click="doAxios">삭제데이터원복</button>

      <todo-list v-bind:todos="todos" @del-todo="delTodo"></todo-list>

      <custom-input v-model="newText" @keyup.enter="newTodo"></custom-input>
    </div>

    <hr />

    <!-- .sync로 부모-자식 데이터 동기화 테스트 -->
    <div class="screen-container">
      <p class="desc">.sync로 부모/자식간 데이터 동기화 (console 확인)</p>
      <test-sync v-bind:size.sync="size"></test-sync>
    </div>
  </div>
</template>

<script>
import CustomInput from './Inputs/CustomInput.vue'
import TodoList from './Todos/TodoList.vue'
import TestSync from './Test/TestSync.vue'
import axios from 'axios'

export default {
  name: 'Test2',
  data () {
    return {
      filterText: '',
      newText: '',
      todos: [],
      isTodosLoading: false,

      size: 'little'
    }
  },
  methods: {
    delTodo: function (id) {
      console.log('del id from Test2 : ' + id)
      this.todos = this.todos.filter(todo => {
        return todo.id !== id
      })
    },
    clearFilter: function () {
      console.log('clearFilter')
      this.filterText = ''
      this.$refs.filterText.$el.focus()
      // this.$refs.filterText.$el.value = ''
    },
    doAxios: function () {
      let _self = this
      axios.get('https://autofit.co.kr/api/todos')
        .then(function (res) {
          // console.log(res)
          _self.todos = res.data.todos
          _self.isTodosLoading = false
        })
        .catch(function (err) {
          console.error(err)
          _self.isTodosLoading = false
        })
    }
  },
  created: function () {
    this.doAxios()
  },
  components: {
    CustomInput,
    TodoList,
    TestSync
  },
  watch: {
    filterText: function (newVal, oldVal) {
      console.log('val changed from Test2 : ' + newVal)
      this.todos.forEach(function (e) {
        if (e.title.indexOf(newVal) === -1) {
          e.isSearched = false
        } else {
          e.isSearched = true
        }
      })
    },
    size: function (newVal, oldVal) {
      console.log('.sync watch(parent) - size : ' + oldVal + '->' + newVal)
    }
  }
}
</script>

<style scoped>

</style>
