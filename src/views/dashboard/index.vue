<template lang="pug">
  .dashboard-container
    el-row
      el-col(v-for="user in getUserList")
        span {{user}}
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'dashboard',
  computed: {
    ...mapGetters([
      'userList'
    ]),
    getUserList() {
      return Object.values(this.userList)
    }
  },
  async created() {
    await this.$store.dispatch('GetUsers')
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
