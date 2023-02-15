<template>
  <div>
    <CommonBodyTitleA />
    <OtherSubTitleA />
    <OtherQuestionTitleA />
    <OtherQuestionBoxA />
    <OtherQuestionBtnA @click="alert()" />
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
    sendMail() {
      const router = this.$router
      const form = this.form

      const send = firebase.functions().httpsCallable('sendMail')
      send(form)
        .then((data: any) => {
          alert('送信しました。')
          router.push('/')
        })
        .catch((error: any) => {
          alert('送信に失敗しました。')
        })
    },
  },
})
</script>
