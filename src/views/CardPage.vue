<template>
  <el-page-header class="header" :icon="ArrowLeft" @click="this.$router.push({ name: 'homePage' })">
  </el-page-header>

  <el-descriptions title="User card" direction="vertical" border style="margin-top: 20px">
    <el-descriptions-item :rowspan="2" :width="140" label="Photo" align="center">
      <el-image
        style="width: 100px; height: 100px"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
    </el-descriptions-item>
    <el-descriptions-item label="Username">{{ singleUser.username }}</el-descriptions-item>
    <el-descriptions-item label="Telephone">{{ singleUser.phone }}</el-descriptions-item>
    <el-descriptions-item label="email">{{ singleUser.email }}</el-descriptions-item>
    <el-descriptions-item label="password">{{ singleUser.password }}</el-descriptions-item>
    <el-descriptions-item label="Address">
      {{ adress }}
    </el-descriptions-item>
  </el-descriptions>
</template>

<script lang="ts">
import { mapActions, mapState } from 'vuex'

import { IUserInfo } from '../types'
export default {
  props: {
    id: {
      type: String,
      default: ''
    }
  },

  created() {
    this.fetchSingleUser(this.$route.params.id)
  },

  computed: {
    ...mapState(['singleUser']),
    adress() {
      const singleUser: IUserInfo = this.singleUser
      return `Address: ${singleUser.address?.city}, ${this.singleUser.address?.street}, ${this.singleUser.address?.number}, ${this.singleUser.address?.zipcode}`
    }
  },
  methods: {
    ...mapActions(['fetchSingleUser'])
  }
}
</script>

<style lang="css" scoped>
.header {
  background: red;
  padding: 10px;
  width: 100%;
}
</style>
