<template>
  <el-dropdown class="w-full">
    <span class="el-dropdown-link">
      Порядок отображения
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="reverse('')">Обычный</el-dropdown-item>
        <el-dropdown-item @click="reverse('sort=desc')">Перевернуть</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <div class="home-page__row">
    <Card v-for="user in users" :key="user.id" :user="user"></Card>
  </div>
</template>

<script lang="ts">
import Card from '@/components/Card.vue'
import { mapActions, mapState } from 'vuex'
import { Select } from '@element-plus/icons-vue'

export default {
  data() {
    return {}
  },

  components: { Select, Card },
  mounted() {
    this.fetchUserInfo()
    // this.fetchSingleUser(user.id)
    console.log(this.user)
  },
  methods: {
    reverse(rev: string) {
      this.$store.dispatch('fetchUserInfo', rev)
    },
    ...mapActions(['fetchUserInfo', 'fetchSingleUser'])
  },
  computed: {
    ...mapState(['users'])
  }
}
</script>

<style lang="css" scoped>
.home-page__row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}
</style>
