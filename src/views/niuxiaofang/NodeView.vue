<script setup>
import { onBeforeMount } from "vue"
import { getSelectHospital } from "@/server/niuxiaofang/nxf"

onBeforeMount(async () => {
  const data = await getSelectHospital()
  console.log(data)
})
</script>
<template>
  <el-select>
    <el-option></el-option>
  </el-select>
</template>
<style></style>
