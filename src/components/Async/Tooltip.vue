<!-- Tooltip.vue -->
<template>
  <div class="alert alert-primary alert-dismissible fade show" role="alert">
    {{tooltipMessage}}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Tooltip',
  props: {
    tooltipMessage: String
  }
}
</script>
