<template>
  <div class="index-test12-wrapper">
    <p>我好像发现了什么！</p>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import api from 'api'
  export default {
    name: 'page-index-test12',
    components: {},
    data() {
      return {}
    },
    computed: {
      ...mapGetters([])
    },
    methods: {
      ...mapActions([])
    }
  }
</script>
<style lang="postcss" scoped>
  .index-test12-wrapper {
    text-align: center;
    line-height: 3;
  }
</style>