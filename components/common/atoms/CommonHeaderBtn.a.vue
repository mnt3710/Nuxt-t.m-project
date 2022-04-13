<template>
  <div class="hover:bg-gray-100 h-14">
    <button class="text-white p-3 hover:text-black m-0 h-full w-24" @click="changePage(name)">
      {{ name }}
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    name: {
      default: '',
      type: String
    }
  },
  methods: {
    changePage(route: string) {
      this.$router.push(route)
    }
  }
})
</script>