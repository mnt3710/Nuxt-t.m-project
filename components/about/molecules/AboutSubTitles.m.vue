<template>
  <div>
    <div v-for="i in 4" :key="i.toString()">
      <AboutSubTitleA :num="num" />
    </div>
  </div>
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
