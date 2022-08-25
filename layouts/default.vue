<template>
  <div>
    <CommonHeaderO class="sticky top-0" v-if="$route.name !== 'index'" />
    <Nuxt />
    <CommonFooterO v-if="$route.name !== 'index'" />
  </div>
</template>
