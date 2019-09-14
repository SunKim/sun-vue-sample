<template>
  <div class="screen-container">
    <h1>Component test1</h1>
    <p class="desc">기본적인 Component 사용 예제</p>
    <custom-input v-model="newText" placeholder="내용입력..."></custom-input>
    <div class="log-console" v-html="newText">
    </div>
  </div>
</template>

<script>
import CustomInput from './Inputs/CustomInput.vue'

export default {
  name: 'Test',
  data () {
    return {
      newText: ''
    }
  },
  components: {
    CustomInput
  }
}
</script>

<style scoped>
.log-console { margin:20px auto;border:1px solid #999;max-width:900px;min-height:80px;text-align:left;font-size: 24px;}
</style>
