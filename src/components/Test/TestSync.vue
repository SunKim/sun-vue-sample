<template>
  <input :value="size" @input="$emit('update:size', $event.target.value)" />
</template>

<script>
export default {
  name: 'TestSync',
  props: ['size']
}
</script>
