<template>
  <div>&lt;{{ $store.state.subTitle[num] }}&gt;</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    num: {
      default: 0,
      type: Number,
    },
  },
})
</script>
