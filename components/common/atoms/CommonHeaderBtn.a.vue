<template>
  <div class="hover:bg-gray-100 h-14" :class="styleNowPageBG">
    <button
      class="font-alegreya-sans-cs h-full w-24 text-xl hover:text-black m-0 p-3"
      :class="styleNowPageFont"
      @click="changePage(name)"
    >
      {{ name }}
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  // fixed : $route.nameでもって来ればおけ
  props: {
    name: {
      default: '',
      type: String,
    },
  },
  computed: {
    styleNowPageBG() {
      return this.$route.name === this.name ? 'bg-white' : 'bg-black'
    },
    styleNowPageFont() {
      return this.$route.name === this.name ? 'text-black' : 'text-white'
    },
  },
  methods: {
    changePage(route: string) {
      this.$router.push(route)
    },
  },
})
</script>
