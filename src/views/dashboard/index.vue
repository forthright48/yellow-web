<template lang="pug">
  .dashboard-container
    el-row.wrapColumn(type="flex" :gutter="20")
      el-col.gutter-top(:span="3" v-for="user in getUserList" :key="user.username")
        UserCard(:user="user")
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
    this.init()
  },
  methods: {
    async init() {
      setInterval(async() => {
        await this.$store.dispatch('GetUsers')
      }, 2000)
    }
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

.gutter-top {
  margin-top: 20px;
}
</style>
