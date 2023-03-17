<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="所属区域">
      <el-cascader
        :options="options"
        v-model="form.region"
        @change="handleChange">
      </el-cascader>
    </el-form-item>
    <el-form-item label="医院名称">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="分类">
      <el-select v-model="form.level" placeholder="选择分类">
        <el-option label="A类" value="A" />
        <el-option label="B类" value="B" />
        <el-option label="C类" value="C" />
      </el-select>
    </el-form-item>
    <el-form-item label="政府等级">
      <el-input v-model="form.desc" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <!-- <el-button>Cancel</el-button> -->
    </el-form-item>
  </el-form>
  
</template>
<script setup>
import { ref, reactive } from 'vue'
import { provinceAndCityData } from 'element-china-area-data'
import { addHospital } from '@/server/niuxiaofang/nxf.js'
const options = reactive(provinceAndCityData)
// do not use same name with ref
const form = reactive({
  region: [],
  name: '',
  level: '',
  desc: '',
})

const onSubmit = () => {
  addHospital(form).then(res => {
    console.log(res)
  })
}
const handleChange = (value) => {
  console.log(value)
}
</script>
<style lang="scss" scoped>
.text-center {
  text-align: center;
}
</style>
