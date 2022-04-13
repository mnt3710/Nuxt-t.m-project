<template>
  <div class="m-5">
    {{title}}:
    {{context}}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: {
      default: '',
      type: String
    },
    context: {
      default: '',
      type: String
    },
  },
})
</script>