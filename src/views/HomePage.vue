<template>
  <div>
    <el-row :gutter="15">
      <el-col :span="8" v-for="user in users" :key="user.id" >
        <Card :user="user"></Card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import Card from '@/components/Card.vue'
import { mapActions, mapState } from 'vuex'

export default {

  components: { Card },
  mounted() {
      this.fetchUserInfo()
  },
  methods:{
    ...mapActions(['fetchUserInfo'])
  },
  computed:{
    ...mapState(['users'])

  }

}
</script>

<style lang="scss" scoped>

</style>
