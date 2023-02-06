<template>
  <div class="affix-container">
    <el-affix target=".affix-container" :offset="80">
      <h1 type="primary">setup</h1>
    </el-affix>
  </div>
  <div class="container">
    <div class="heder">
      <div v-for="(item, index) in list" :key="index">
        {{ item }}
      </div>
    </div>
    <el-button type="primary" @click="clickWarning">注意</el-button>
    <div :class="setupvisible ? 'props-class' : ''" v-if="warningVisible">
      <div v-for="(item, index) in warninglist" :key="index">
        <h3>{{ item }}</h3>
      </div>
      <el-button @click="dialogVisible = true" type="text">详细</el-button>
    </div>
    <div>
      <el-button type="success" plain @click="clickProps">
        setup传参props
      </el-button>
      <div>
        使用 setup 函数时，它将接受两个参数：
        <div v-for="(item, index) in paramsList" :key="index">
          <h3>{{ item }}</h3>
        </div>
      </div>
      <SetupDemo v-if="setupvisible" :warninglist="warninglist" :list="list" @sonclick="sonclick" />
    </div>
  </div>
  <div class="setup-footer">
    <el-steps :active="active" align-center finish-status="success">
      <el-step title="setup介绍" />
      <el-step title="setup注意事项" />
      <el-step title="setup传参" />
    </el-steps>
    <!-- <el-button style="margin-top: 12px" @click="next">Next step</el-button> -->
  </div>
  <el-dialog v-model="dialogVisible" title="Tips" width="60%" :before-close="handleClose">
    <p>
      ①、vue3支持向下兼容，vue2中的data、methods配置项在vue3中都能够使用，但是尽量不要将vue3中的配置项和vue2.x配置项混用；
    </p>
    <p>
      ②、vue2.x配置（data、methods、computed等）中可以访问setup中的属性、方法，但是在setup中不能访问vue2.x配置（data、methods、computed等）；
    </p>
    <p>③、如果vue2.x配置与vue3配置存在重名，则以setup优先；</p>
    <p>
      ④、setup不能是一个async函数，因为返回值不再是return的对象，而是promise，模板看不到return对象中的属性；
    </p>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          确认
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
// import { h } from 'vue'
import { ElAffix } from "element-plus"
import { defineAsyncComponent, ref } from "vue"
const SetupDemo = defineAsyncComponent(() => import("./SetupDemo.vue"))
export default {
  components: { ElAffix, SetupDemo },
  // setup是vue3中的一个新的配置项，值为一个函数，我们在组件中用到的数据、方法等等，都要配置在setup中
  setup() {
    console.log(this)
    const list = ref([
      "vue3的一个新配置项，值是一个函数,可以理解为Composition Api的入口.",
      "执行时间：在beforeCreate之前，即组件创建之前",
      "所以在 setup 函数中，无法使用 data 和 methods 的变量和方法",
      "由于我们不能在 setup函数中使用 data 和 methods，所以 Vue 为了避免我们错误的使用，直接将 setup函数中的this修改成了 undefined",
      "在模版中需要使用的变量和方法最后都是需要 return 出去的 不然无法再模板中使用",
    ]) // setup介绍
    const Dark = ref("promise")
    const warninglist = ref([
      "（1）vue2和vue3的配置尽量不要混用",
      `（2）setup不能是一个async函数，因为返回值不再是return的对象, 而是${Dark.value}, 模板看不到return对象中的属性。（后期也可以返回一个Promise实例，但需要Suspense和异步组件的配合）`,
    ]) // setup注意事项
    const paramsList = ["props", "context"]
    let setupvisible = ref(false)
    let warningVisible = ref(false)
    const active = ref(0)
    const next = () => {
      if (active.value++ > 2) active.value = 0
    }
    const clickWarning = () => {
      warningVisible.value = true
      active.value = 1
    }
    const clickProps = () => {
      setupvisible.value = true
      active.value = 2
    }
    const sonclick = (msg) => {
      console.log(msg)
      list.value.push(msg)
      active.value = 3
    }
    const dialogVisible = ref(false)

    // 返回一个渲染函数，可以自定义渲染内容(用得不多，了解即可)
    // return () => h('h1', '学习')
    // 返回一个对象，对象中的属性和方法在模板中可以直接使用
    return {
      list,
      warninglist,
      setupvisible,
      warningVisible,
      paramsList,
      active,
      next,
      clickWarning,
      clickProps,
      sonclick,
      dialogVisible,
    }
  },
  beforeCreate() {
    console.log("beforeCreate")
  },
}
</script>
<style scoped>
.affix-container {
  color: #fff;
  text-align: center;
  height: 60px;
  line-height: 60px;
  border-radius: 10px;
  background: var(--el-color-primary-dark-2);
}

.container {
  padding: 40px;
  /* margin: 40px; */
  height: 80vh;
  overflow-y: scroll;
}

.heder {
  color: black;
}

.heder :nth-child(1) {
  font-size: 20px;
  font-weight: 600;
  color: coral;
}

.heder :nth-child(6) {
  color: forestgreen;
}

.props-class {
  color: brown;
}

.setup-footer {
  text-align: center;
  width: 100vw;
  position: absolute;
  display: block;
  bottom: 5vh;
  margin-top: 20px;
}
</style>
