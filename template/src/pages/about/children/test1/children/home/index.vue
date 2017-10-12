<template>
  <div class="about-children-test1-children-home-wrapper">
    Hello, world! about test1 home
    <p><router-link to="/about/test1/test2">test1Test2</router-link></p>
    <p><router-link to="/about/test1/test3">test1Test3</router-link></p>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import utils from 'utils'
  export default {
    name: 'page-about-children-test1-children-home',
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
  .about-children-test1-children-home-wrapper {
    text-align: center;
    line-height: 2;
  }
</style>