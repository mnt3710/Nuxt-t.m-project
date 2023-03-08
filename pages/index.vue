<template>
  <div>
    <IndexTemplateT />
    <AboutTemplateT />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      host: 'host Name',
    }
  },
})
</script>

<style>
.order {
  font-size: 100px;
  word-wrap: unset;
}
</style>
