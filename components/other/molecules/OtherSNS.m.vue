<template>
  <div>
    <CommonBodyTitleA />
    <OtherSubTitleA />
    <OtherQuestionInputA />
    <OtherQuestionTitleA />
    <OtherQuestionBoxA />
    <OtherQuestionBtnA />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      form: {
        name: '',
        email: '',
        contents: '',
      },
    }
  },
  methods: {
    alert() {
      alert('click!!')
    },
  },
})
</script>
