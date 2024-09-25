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

export default {
  data() {
    return {}
  },

  components: { Card },
  mounted() {
    this.fetchUserInfo()
  },
  methods: {
    reverse(rev: string): void {
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
  gap: 20px;
}
@media (max-width: 1200px) {
  .home-page__row {
    font-size: 15px;
  }
}
@media (max-width: 768px) {
  .home-page__row {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 580px) {
  .home-page__row {
    grid-template-columns: repeat(2, 1fr);
    font-size: 10px;
  }
}
</style>
