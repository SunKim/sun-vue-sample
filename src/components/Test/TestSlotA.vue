<template>
  <a
    v-bind:href="url"
    class="btn btn-info"
  >
    <slot>Default Slot Value</slot>
  </a>
</template>

<script>
export default {
  name: 'TestSlotA',
  props: ['url']
}
</script>
