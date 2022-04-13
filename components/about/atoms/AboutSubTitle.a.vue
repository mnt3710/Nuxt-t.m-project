<template>
  <div>
    &lt;{{text}}&gt;
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props:{
    num: {
      default: 0,
      type: Number
    }
  },
  computed: {
    text() {
      return this.$store.state.subTitle[this.num]
    }
  }
})
</script>