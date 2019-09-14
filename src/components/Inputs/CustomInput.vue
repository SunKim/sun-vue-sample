<template>
  <input
    v-bind:value="filterText"
    v-on:input="$emit('input', $event.target.value)"
  >
</template>

<script>
export default {
  name: 'CustomInput',
  props: ['value'],
  watch: {
    filterText: function (newVal, oldVal) {
      this.$emit('input', newVal)
    },
    value: function (newVal, oldVal) {
      console.log('val changed from CustomInput : ' + newVal)
      this.filterText = this.value
    }
  },
  data () {
    return {
      filterText: this.value
    }
  }
}
</script>

<style scoped>
input { border:0; border-bottom:1px solid purple; min-width:300px;font-size:18px; }
</style>
