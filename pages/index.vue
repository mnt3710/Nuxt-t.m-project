<template>
  <div>
    <IndexTemplateT />
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
  /* methods: {
    async sendRequest() {
      const response = await this.$axios.$get('https://httpbin.org/get')
      this.accept = response.headers.Accept
    },
    async asyncData({ app }) {
      const response = await app.$axios.$get('https://httpbin.org/get')
      return { host: response.headers.Host }
    },
  }, */
})
</script>

<style>
.order {
  font-size: 100px;
  word-wrap: unset;
}
</style>
