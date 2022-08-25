<template>
  <div>
    <button @click="alertLog('')">submit</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    alertLog(text: string) {
      alert(text)
    }
  }
})
</script>