<template>
  <div class="index-children-test1-wrapper">
    <p>test1</p>
    <p><button @click="gotoTest2">test2</button></p>
  </div>
</template>
<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex'
  import api from 'api'
  export default {
    name: 'page-index-children-test1',
    components: {},
    data() {
      return {
        time: 5
      }
    },
    computed: {
      ...mapGetters([])
    },
    mounted(){
    },
    methods: {
      ...mapActions([]),
      ...mapMutations([]),
      gotoTest2(){
        this.$router.push({path: '/test2'})
      }
    }
  }
</script>
<style lang="postcss" scoped>
  .index-children-test1-wrapper {
    text-align: center;
    line-height: 3;
  }
</style>