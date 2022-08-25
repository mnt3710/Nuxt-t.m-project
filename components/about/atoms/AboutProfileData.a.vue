<template>
  <div class="m-8">
    {{title}}:
    {{text}}
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
    text: {
      default: '',
      type: String
    },
  },
})
</script>