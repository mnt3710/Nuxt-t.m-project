<template>
  <div class="w-1/4">
    <div v-for="i in checkDir.length">
      <AboutProfileDataA
        :title="checkDir[i - 1].title"
        :text="checkDir[i - 1].text"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  props: {
    direction: {
      default: '',
      type: String,
    },
    type: {
      default: '',
      type: String,
    },
  },
  computed: {
    ...mapState(['aboutContents']),
    checkDir() {
      if (this.type === 'profile') {
        return this.direction === 'L'
          ? this.aboutContents.profile.left
          : this.aboutContents.profile.right
      }
      if (this.type === 'skills') {
        return this.direction === 'L'
          ? this.aboutContents.skills.left
          : this.aboutContents.skills.right
      }
    },
  },
})
</script>
