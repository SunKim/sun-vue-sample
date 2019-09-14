<template>
  <div class="container">
    <p class="desc mb20">$root, $parent, $ref를 통한 데이터 참조</p>
    <p v-text="textFromRoot"></p>

    <access-parent-data ref="test5ChildComponent"></access-parent-data>

    <div class="form-group">
      <input v-model="dataFromChild" class="form-control" />
    </div>

    <p class="desc mt40">local 이미지 qovh 테스트</p>
    <img src="@/assets/images/pop_top_10.jpeg" style="width:400px;"/>
  </div>
</template>

<script>
import AccessParentData from './Test/AccessParentData.vue'

export default {
  name: 'Test5',
  data () {
    return {
      textFromRoot: this.$root.rootTest,
      dataFromParent: 'data from parent instance',
      dataFromChild: ''
    }
  },
  components: {
    AccessParentData
  },
  mounted: function () {
    // console.log(this.$refs.test5ChildComponent)
    this.dataFromChild = this.$refs.test5ChildComponent.$data.dataFromChild
  }
}
</script>

<style scoped>
input { display: inline-block;width: 50%; }
</style>
