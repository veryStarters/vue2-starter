<template>
  <div class="index-test11-wrapper">
    <p>订单到底是什么东西？</p>
    <p><button @click="gotoTest2">test12</button></p>
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    name: 'page-index-test11',
    components: {},
    data() {
      return {
      }
    },
    computed: {
      ...mapGetters([])
    },
    mounted(){
    },
    methods: {
      ...mapActions([]),
      gotoTest2(){
        this.$router.push({name: 'indexTest12'})
      }
    }
  }
</script>
<style lang="postcss" scoped>
  .index-test11-wrapper {
    text-align: center;
    line-height: 3;
  }
</style>