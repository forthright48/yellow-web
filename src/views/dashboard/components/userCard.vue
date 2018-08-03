<template lang="pug">
  el-card
    div(slot="header")
      el-row
        el-col(:span="12" v-bind:class="[{'dndActive': dnd}]")
          span {{this.dnd}}
        el-col(:span="12")
          span {{this.presence}}
    div
      span {{this.username}}

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'userCard',
  props: ['dnd', 'presence', 'username'],
  data() {
    return {}
  }
}
</script>

<style>
.dndActive {
    font-size: 20px;
}
</style>