<template>
  <h1>pinia + vue3</h1>
  
  <user></user>
  <h2>state</h2>
  <div>

    <input type="text" v-model="userStore.name" />
    姓名：{{ userStore.name }} 年龄： {{ userStore.age }}
    <div style="margin-top: 20px">
      <el-button @click="userStore.changeName('aaa')">修改名称</el-button>
      <el-button @click="changeState">修改state</el-button>
      <el-button @click="changeState02">修改state--patch函数</el-button>
      <el-button @click="userStore.$reset()">store重置</el-button>
    </div>
  </div>
  <hr />
  <h2>getter</h2>
  <div>
    {{ userStore.msg }}
  </div>
  <hr />
  <h2>example</h2>
  <div class="counter">
    <el-button @click="store.decrement()">减</el-button>
    <p>count {{ count }}</p>
    <el-button @click="store.increment()">加</el-button>
  </div>
  
  <div style="margin-top: 40px">
    <ul>
      <li v-for="(item, index) in sortedTierList" :key="index" class="tirItem">
        <div class="left">{{ item.title }}</div>
        <div class="right">{{ item.rank }}</div>
        <div>
          <el-button @click="store.promote(index)">up</el-button>
          <el-button @click="store.demote(index)">down</el-button>
        </div>
      </li>
    </ul>
    <el-input type="text" inline v-model="newItem" />
    <el-button
      @click="
        store.addTier(newItem);
        newItem = ''
      "
    >
      add item
    </el-button>
  </div>
</template>

<script setup>
import user from "./components/user.vue"
import { useStore } from "@/stores/main.js"

import { useUserStore } from "@/stores/niuxiaofang/user.js"
import { storeToRefs } from "pinia"

import { ref } from "vue"



const userStore = useUserStore()

// $patch

function changeState() {
  userStore.$patch({
    name: "aaa",
    age: 19,
  })
}
function changeState02() {
  userStore.$patch((state) => {
    state.name = "hhhh"
  })
}

// $subscribe
userStore.$subscribe((mutation, state) => {
  // import { MutationType } from 'pinia'
  // mutation.type // 'direct' | 'patch object' | 'patch function'
  // // 和 cartStore.$id 一样
  // mutation.storeId // 'cart'
  // // 只有 mutation.type === 'patch object'的情况下才可用
  // mutation.payload // 传递给 cartStore.$patch() 的补丁对象。
  console.log(mutation)

  // 每当状态发生变化时，将整个 state 持久化到本地存储。
  // localStorage.setItem('cart', JSON.stringify(state))
})

// count 小例子
const store = useStore()
const { count, sortedTierList } = storeToRefs(store)
const newItem = ref("")


</script>

<style scoped>
h2 {
  margin-bottom: 20px;
}
hr{
  margin: 30px 0;
}
.counter {
  width: 300px;
  display: flex;
  justify-content: space-around;
}
.tirItem {
  width: 500px;
  display: flex;
  justify-content: space-around;
}
</style>
