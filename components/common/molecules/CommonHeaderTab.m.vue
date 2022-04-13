<template>
  <div class="flex flex-row" >
    <div
      v-for="n in $store.state.tabList.length"
      :key="$store.state.tabList[n]"
      class="w-0 invisible md:visible md:w-auto"
    >
      <CommonHeaderBtnA :name="$store.state.tabList[n-1]" />
    </div>
    <div class="flex align-middle mr-4">
      <img src="~/assets/hamburger.svg" class="visible md:invisible md:w-0">
    </div>
  </div>
</template>

<script>
export default {
}
</script>