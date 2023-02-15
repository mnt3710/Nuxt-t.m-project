<template>
  <div>
    <!------------ここをmoleculeにした方がいいのかな、---------->
    <div class="flex justify-between">
      <AboutProfile direction="L" type="profile" />
      <AboutSubTitles num="0" />
      <AboutProfile direction="R" type="profile" />
    </div>
    <!-- ----------------------------------------------------->
    <div class="flex justify-between">
      <AboutProfile direction="L" type="skills" />
      <AboutSubTitles num="1" />
      <AboutProfile direction="R" type="skills" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
