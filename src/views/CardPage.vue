
<template>
  <el-card style="max-width: 480px">
    <template #header>{{singleUser.username}}</template>
    <img
      src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      style="width: 100%"
    />
  </el-card>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  props: ['user'],

  mounted() {
    // this.fetchSingleUser(this.user.id)
    console.log(this.singleUser)
    console.log(this.user)
  },

  computed:{
    ...mapState(['singleUser'])
  },
  methods:{
    ...mapActions(['fetchSingleUser']),
  },





}
</script>

<style lang="scss" scoped>

</style>
