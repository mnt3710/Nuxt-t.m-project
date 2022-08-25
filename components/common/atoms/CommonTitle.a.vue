<template>
  <button class="text-white font-megrim text-3xl ml-5" @click="changePage">
    t.m official
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    changePage() {
      this.$router.push('/')
    },
  },
})
</script>
