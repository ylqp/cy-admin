<template>
  <div class="affix-container">
    <el-affix target=".affix-container" :offset="80">
      <h2>组合API都是函数，再使用时需要先引入（setup不需要引入）</h2>
    </el-affix>
  </div>
  <div class="container">
    <router-link to="/dyx/test">
      <el-button type="success" plain>setup</el-button>
    </router-link>
  </div>
</template>
<script>
import { ElAffix } from "element-plus"
export default {
  components: { ElAffix },
}
</script>
<style scoped>
.affix-container {
  text-align: center;
  height: 40px;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
}

.container {
  text-align: center;
  padding: 20px;
  overflow: auto;
}
</style>
