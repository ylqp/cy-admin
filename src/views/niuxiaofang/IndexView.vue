<script setup>
import LuckDrawVue from "./LuckDraw.vue"
</script>

<template>
  <LuckDrawVue />

  <router-link to="/nxf/node">后台</router-link>
  <router-link to="/nxf/dq">党群代理</router-link>
  <router-link to="/nxf/pinia">pinia</router-link>
</template>
<style lang="scss" scoped>
.test {
  color: red;
}
</style>
