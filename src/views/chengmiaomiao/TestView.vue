<template>
  <Suspense>
    <template v-slot:default>
      <Child />
    </template>
    <template v-slot:fallback>
      <h3>加载中.....</h3>
    </template>
  </Suspense>
</template>
<script>
import { defineAsyncComponent } from "vue"
const Child = defineAsyncComponent(() => import("./Child.vue"))
export default {
  components: { Child },
  setup() {},
}
</script>
