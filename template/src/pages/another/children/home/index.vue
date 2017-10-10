<template>
  <div class="test-children-home-wrapper">
    another home
    <p><router-link to="/another/test1">测试1</router-link></p>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import utils from 'utils'
  export default {
    name: 'page-test-children-home',
    components: {},
    data() {
      return {}
    },
    mounted(){},
    computed: {
      ...mapGetters([])
    },
    methods: {
      ...mapActions([])
    }
  }
</script>
<style lang="postcss" scoped>
  .test-children-home-wrapper {
    text-align: center;
    line-height: 2;
  }
</style>