<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content bg-purple">1</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-dark">2</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">3</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">4</div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
  .el-row {
    margin-bottom: 0px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #0f0;
  }
  .bg-purple {
    background: #f00;
  }

  .grid-content {
    text-align: center;
    line-height: 36px;
    border-radius: 4px;
    min-height: 36px;
  }

</style>
