<template>
  <div class="child-class">
    <h1>setup子组件</h1>
    <div>
      <h2 style="color: #409eff; display: block; margin-left: 40vw">
        props传参
      </h2>
      <div v-for="(item, index) in propsDetail" :key="index">
        <div style="padding: 5px; font-weight: 600">{{ item }}</div>
      </div>
      <div class="prps-class" v-for="(item, index) in arr" :key="index">
        <h3>{{ item }}</h3>
      </div>
      <h2 style="color: #409eff; display: block; margin-left: 40vw">
        context传参
      </h2>
      <div v-for="(item, index) in contextDetail" :key="index">
        <div style="padding: 5px; font-weight: 600">{{ item }}</div>
      </div>
      <el-button type="primary" style="display: block; margin-left: 40vw" @click="childClick">
        点我测试context传参
      </el-button>
    </div>
  </div>
</template>

<script>
import { toRefs } from "vue"

export default {
  // 因为 props 是响应式的，你不能使用 ES6 解构，因为它会消除 prop 的响应性。
  props: {
    warninglist: Array,
    list: Array,
  },
  // 需要声明一下接受到了，否则会报警告
  setup(props, context) {
    // 传递给 setup 函数的第二个参数是 context。context 是一个普通的 JavaScript 对象，它暴露三个组件的 property
    // context 是一个普通的 JavaScript 对象，也就是说，它不是响应式的，这意味着你可以安全地对 context 使用 ES6 解构
    // setup(props, { attrs, slots, emit }) {
    // eslint-disable-next-line no-debugger
    debugger
    const propsDetail = [
      "setup 函数中的第一个参数是 props。正如在一个标准组件中所期望的那样，setup 函数中的 props 是响应式的，当传入新的 prop 时，它将被更新",
      "但是，因为 props 是响应式的，你不能使用 ES6 解构，因为它会消除 prop 的响应性。",
      "如果需要解构 prop，可以通过使用 setup 函数中的 toRefs 来安全地完成此操作。",
      "值得注意的是：",
    ]
    const contextDetail = [
      "传递给 setup 函数的第二个参数是 context。context 是一个普通的 JavaScript 对象，它暴露三个组件的 property",
      "context 是一个普通的 JavaScript 对象，也就是说，它不是响应式的，这意味着你可以安全地对 context 使用 ES6 解构",
      "setup(props, { attrs, slots, emit }) {",
    ]
    // 如果需要解构 prop，可以通过使用 setup 函数中的 toRefs 来安全地完成此操作。
    const { warninglist } = toRefs(props)
    console.log(warninglist.value)
    const arr = warninglist.value
    const childClick = () => {
      context.emit("sonclick", "通过context子组件传递给父组件")
    }
    return {
      propsDetail,
      contextDetail,
      arr,
      childClick,
    }
  },
}
</script>

<style scoped>
.child-class {
  border: 10px solid lightskyblue;
  border-radius: 18px;
  /* background-color: beige; */
}

.prps-class {
  color: brown;
}
</style>
