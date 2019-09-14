<!-- AccessParentData.vue -->
<template>
  <p v-text="dataFromParent"></p>
</template>

<script>
export default {
  name: 'AccessParentData',
  data () {
    return {
      dataFromParent: this.$parent.dataFromParent,
      dataFromChild: 'data from child(AccessParentData.vue)'
    }
  }
}
</script>
