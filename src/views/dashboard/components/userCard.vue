<template lang="pug">
  el-card
    div(slot="header")
      el-row
        el-col.horizontal-center(:span="12")
          el-button(v-if="busy" type="danger" circle)
          el-button(v-else circle)
        el-col.horizontal-center(:span="12")
          el-button(v-if="present" type="success" circle)
          el-button(v-else circle)
    .card-body
        .text-center {{user.username}}
        .text-center(v-if="busy")
          countdown(:time="countdownMS" :interval="1000")
            template(slot-scope="props")
              span {{props.minutes}}:{{props.seconds}}

</template>

<script>

export default {
  name: 'userCard',
  props: ['user'],
  data() {
    return {}
  },
  computed: {
    busy() { // Am I busy?
      // I am not busy if it has been more than 25 minutes since I pressed dnd
      if (this.countdownMS === 0) return false
      // It has not been 25 minutes since I last pressed dnd

      // But did I press the button to switch off?
      if (this.user.dnd === false) return false
      return true
    },
    countdownMS() {
      const lastDnd = this.user.dndStartTime || 0
      const deadline = lastDnd + 25 * 60 * 1000
      const now = Date.now()
      let timeLeft = deadline - now

      if (timeLeft <= 0) {
        timeLeft = 0
      }
      return timeLeft
    },
    present() {
      return this.busy === false && this.user.presence
    }
  }
}
</script>

<style>
.horizontal-center {
    display: flex;
    justify-content: center;
}

.card-body {
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
</style>