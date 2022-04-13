<template>
  <button class="text-white text-3xl ml-5" @click="log('title button')">
    t.m official
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    log(text: string) {
      console.log(`clicked ${text}`)
    }
  }
})
</script>