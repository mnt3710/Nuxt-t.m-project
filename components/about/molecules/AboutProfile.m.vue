<template>
  <div>
    <div v-for="i in profile.length">
      <AboutProfileDataA
        :title="profile[i-1].title"
        :context="profile[i-1].context"
        />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    direction: {
      default: '',
      type: String
    }
  },
  computed: {
    profile() {
      if(this.direction === 'left'){
        return this.$store.state.leftProfile
      }
      else if(this.direction === 'right'){
        return this.$store.state.rightProfile
      }
    }
  }
})
</script>