<template>
  <el-card style="max-width: 480px" class="carda">
    <template #header>{{user.username}}</template>
    <el-avatar :size="50" icon="UserFilled" />
    <template #footer>Yummy hamburger</template>

  </el-card>
</template>

<script lang="ts">
import { mapState } from 'vuex'


export default {
  props: ['user'],
computed:{
  ...mapState(['users'])
}
}
</script>

<style lang="css" scoped>
.carda{
  width: 100%;
  margin: 10px;
}
</style>
