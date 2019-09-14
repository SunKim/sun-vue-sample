<template>
  <div class="container">
    <p class="desc">Async Components (Dynamic Import)</p>
    <p class="mb20"> component를 dynamic하게 import. render될때 load</p>
    <Tooltip tooltip-message="this is an async tooltip"></Tooltip>
  </div>
</template>

<script>
// dynamic import를 하므로 여기서 static하게 import 하지 않음.
// import Tooltip from './Async/Tooltip.vue'

export default {
  name: 'Test4',
  components: {
    Tooltip: () => import('@/components/Async/Tooltip.vue')
  }
}
</script>
