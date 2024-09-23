<template>
  <el-card style="max-width: 480px" class="carda" @click="$router.push(`/cardPage/${user.id}`)">
    <template #header>{{ user.username }} <br /> </template>
    <el-avatar :size="90" icon="UserFilled" />
    <template class="foot" #footer
      >{{ user.email }} <br />
      phone: {{ user.phone }}</template
    >
  </el-card>
</template>

<script lang="ts">
import cardPage from '@/views/CardPage.vue'

export default {
  computed: {
    cardPage() {
      return cardPage
    }
  },
  props: ['user'],
  mounted() {
    console.log(this.user)
  }
}
</script>

<style lang="css" scoped></style>
