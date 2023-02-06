<template>
  <div class="user">
    用户：{{ name }}
    <!-- <p>{{store.count}}</p> -->
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia"

// import { toRefs } from "vue"

import { useUserStore } from "@/stores/niuxiaofang/user"
// import { useStore2 } from "@/stores/main"

const { name } = storeToRefs(useUserStore())
// const store = useStore2()
</script>

<style>
.user {
  position: fixed;
  top: 0;
  right: 0;
  padding: 16px;
  background: hsla(160, 100%, 37%, 1);
  color: white;
}
</style>
