<template>
  <div class="screen-container">
    <h1>Component test3 - slot</h1>

    <!-- <test-slot1></test-slot1>태그 안의 전체 내용이 자식의 <slot> 으로 들어감 -->
    <p class="desc">
      태그 안의 모든 내용이 자식에게 전달
    </p>
    <test-slot-a url="/">
      <i class="fas fa-user"></i>
      Goto Profile
    </test-slot-a>

    <p class="desc">
      부모의 data 전송
    </p>
    <test-slot-a url="/">
      Logged-in Name : {{user.name}}
    </test-slot-a>

    <p class="desc">
      부모에서 아무 내용도 안주면 자식 slot에 넣어놓은 값이 default로
    </p>
    <test-slot-a url="/">
    </test-slot-a>

    <p class="desc">
      Named slot - 자식 slot 각 부분에 이름을 주고 부모에서 각 이름에 맞게 slot 전달 <b>(특히 페이지 레이아웃시 유용)</b>
    </p>
    <test-slot-layout>
      <template v-slot:header>
        <h1>Page Title</h1>
      </template>
      <template v-slot:main>
        <p>
          main contents
        </p>
      </template>
      <template v-slot:footer>
        <p>
          Copyright. 2019c.
        </p>
      </template>
    </test-slot-layout>

    <hr />
    <p class="desc">
      Slot Props를 이용한 Todo list. todos 배열은 부모가 주면서 자식의 todo에 대한 layout도 부모가 정해줌.<br />
      활용1) modal dialg component로 내용은 부모가 정해서 내려줌<br />
      활용2) 안드로이드 홀더 패턴처럼 scroll item은 component 자체적으로 재사용 (데이터 및 아이템 layout만 부모가 내려줌).
      <a target="_blank" href="https://github.com/Akryum/vue-virtual-scroller">vue-virtual-scroller (필수사용)</a><br />
      기타) <a target="_blank" href="https://github.com/posva/vue-promised">vue-promised</a>,
        <a target="_blank" href="https://github.com/LinusBorg/portal-vue">portal-vue</a>
    </p>
    <test-slot-prop-todo v-bind:todos="todos">
      <template v-slot:todo="{ todo }">
        <p>
          {{todo.id}}
          {{todo.title}}
          <span v-if="todo.isComplete">✓</span>
        </p>
        <hr />
        <div v-html="todo.content" style="margin-bottom:10px;"></div>
        <button class="btn btn-sm btn-outline-secondary" @click="delTodo(todo.id)">삭제</button>
      </template>
    </test-slot-prop-todo>
  </div>
</template>

<script>
import TestSlotA from './Test/TestSlotA.vue'
import TestSlotLayout from './Test/TestSlotLayout.vue'
// import TestSlotPropTodo from './Test/TestSlotPropTodo.vue'
import axios from 'axios'
import _ from 'lodash'

export default {
  name: 'Test3',
  data () {
    return {
      user: {
        id: 1,
        name: 'Sun'
      },
      todos: []
    }
  },
  methods: {
    delTodo: function (id) {
      console.log('delTodo clicked - parent : ' + id)
      // this.$emit('todoClicked', id)
      this.todos = _.reject(this.todos, function (el) { return el.id === id })
    }
  },
  components: {
    TestSlotA,
    TestSlotLayout,
    TestSlotPropTodo: () => import('./Test/TestSlotPropTodo.vue').then(console.log('dynamic import'))
  },
  created: function () {
    let _self = this
    axios.get('https://autofit.co.kr/api/todos')
      .then(function (res) {
        // console.log(res)
        _self.todos = res.data.todos
      })
      .catch(function (err) {
        console.error(err)
      })
  }
}
</script>

<style scoped>

</style>
