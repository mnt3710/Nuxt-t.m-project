<template>
  <div>
    <div
      v-for="n in $store.state.tabList.length"
      :key="$store.state.tabList[n]"
    >
      <CommonHeaderBtnA class="rounded" :name="$store.state.tabList[n - 1]" />
    </div>
  </div>
</template>
