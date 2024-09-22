<script setup lang="ts">

</script>

<template>

  <el-container class="container">

    <el-main class="ai">
      <router-view/>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<style scoped>
.container {
  width: 100%;
}
.ai{
  width: 100%;
}
</style>
