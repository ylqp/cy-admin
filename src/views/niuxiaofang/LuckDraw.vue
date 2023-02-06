<template>
  <el-button @click="dialogVisible = true">新增</el-button>
  <el-button @click="getSingleUser">获取</el-button>

  <div>
    {{ index }}
    <ul>
      <li v-for="item in luckUser" :key="item.userCode" class="">
        {{ item.name }}
      </li>
    </ul>
  </div>
  <div>
    <el-button
      type="primary"
      @click="dispatchLuck"
      class="luck-btn animate__animated animate__bounce"
      >抽奖</el-button
    >
  </div>

  <el-dialog v-model="dialogVisible" title="Tips" width="30%" draggable>
    <el-form>
      <el-form-item label="姓名">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="工号">
        <el-input v-model="form.userCode" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="confirm"> Confirm </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import JSConfetti from "js-confetti"
import { postUser, getUsers, getUser } from "@/server/niuxiaofang/nxf"

import { ref, reactive, onMounted } from "vue"
onMounted(() => {
  getUsers().then((data) => {
    console.log(data)
  })
})
const form = reactive({
  name: "",
  userCode: "",
})
function confirm() {
  // console.log(form)
  postUser(form)
}
function getSingleUser() {
  getUser("10857945")
}
const confetti = new JSConfetti()
const dialogVisible = ref(false)
function showConfetti() {
  confetti.addConfetti()
}
const list = [
  {
    name: "牛晓芳",
    userCode: "10857945",
  },
  {
    name: "程苗苗",
    userCode: "2",
  },
  {
    name: "董云肖",
    userCode: "3",
  },
  {
    name: "刘晓真",
    userCode: "4",
  },
  {
    name: "张小辉",
    userCode: "5",
  },
  {
    name: "赵一竹",
    userCode: "6",
  },
]
// console.log(list)
let index = ref(0)
let luckUser = ref([])

function dispatchLuck() {
  const random = Math.random()
  // console.log(random)
  index.value = Math.floor(random * 100) % list.length
  luckUser.value = [list[index.value]]
  showConfetti()
}
</script>

<style>
.luck-btn {
  width: 200px;
  height: 100px;
}
</style>
