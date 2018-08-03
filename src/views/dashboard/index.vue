<template lang="pug">
  .dashboard-container
    el-row.wrapColumn(type="flex")
      el-col(:span="6" v-for="user in getUserList" :key="user.username")
        UserCard(:dnd="user.dnd" :presence="user.presence" :username="user.username")
</template>

<script>
import { mapGetters } from 'vuex'
import { UserCard } from './components'

export default {
  name: 'dashboard',
  components: { UserCard },
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

.wrapColumn{
  flex-wrap: wrap;
}
</style>
