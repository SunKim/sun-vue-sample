'<template>
  <div class="container">
    <p class="desc">mixin(/src/mixin/dialog_mixin.js)를 사용한 심플 예제</p>
    <p>dummy restful api를 위해 http://dummy.restapiexample.com 사용</p>
    <button class="btn btn-info btn-sm mt20" @click="openForm">폼 열기</button>
    <div v-show="isDialogShowing" class="form-group mt40">
      <label>
        이름
        <input class="form-control" value="test" />
      </label>
      <button class="btn btn-info" @click="submitForm">제출</button>
    </div>

    <p class="desc mt40">Custom Directive : v-autofocus</p>
    <p>main.js에서 Vue instance 생성 전 Vue.directive로 설정</p>
    <input v-autofocus />

  </div>
</template>

<script>
import { DialogMixin } from '@/mixins/dialog_mixin.js'
import axios from 'axios'

export default {
  name: 'MixinTest',
  mixins: [ DialogMixin ],
  methods: {
    openForm: function () {
      this.showDialog()
    },
    submitForm: function () {
      const _self = this
      axios.post('http://dummy.restapiexample.com/api/v1/create', {
        'name': 'test',
        'salary': '123',
        'age': '23',
        'id': '719'
      })
        .then(function (res) {
          console.log(res)
          alert('전송완료')
          _self.closeDialog()
        })
        .catch(function (err) {
          console.error(err)
          // new Error(err)
        })
    }
    // ,
    // directives: {
    //   autofocus: {
    //     // directive definition
    //     bind: function (el, binding) {},
    //     unbind: function (el) {},
    //     inserted: function (el) {
    //       el.focus()
    //     }
    //   }
    // }
  }
}
</script>
