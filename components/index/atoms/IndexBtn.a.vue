<template>
  <div class="flex justify-center">
    <button class="font-silkscreen text-4xl" @click="moveAbout">
      Please click here!
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    moveAbout() {
      this.$router.push('about')
    },
  },
})
</script>
