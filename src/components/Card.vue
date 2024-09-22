<template>
  <el-card style="max-width: 480px" class="carda">
    <template #header>{{user.username}} <br> </template>
    <el-avatar :size="90" icon="UserFilled" />
    <template class="foot" #footer>{{user.email}} <br> phone: {{user.phone}}</template>

  </el-card>
</template>

<script lang="ts">


export default {
  props: ['user'],
mounted() {
    // console.log(this.user)
},
}
</script>

<style lang="css" scoped>
.carda{
  margin: 5px;
}

</style>
