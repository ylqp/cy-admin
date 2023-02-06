<template>
  <div class="child">
    <h3>我是Child组件</h3>
    {{ sum }}
  </div>
</template>

<script>
import { ref } from "vue"
export default {
  name: "child-com",
  async setup() {
    let sum = ref(0)
    let p = new Promise((resolve) => {
      setTimeout(() => {
        resolve({ sum })
      }, 3000)
    })
    return await p
  },
}
</script>
