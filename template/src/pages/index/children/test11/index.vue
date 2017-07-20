<template>
  <div class="index-children-test1-wrapper">
    <p>test1</p>
    <p><button @click="gotoTest2">test2</button></p>
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    name: 'page-index-children-test1',
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
  .index-children-test1-wrapper {
    text-align: center;
    line-height: 3;
  }
</style>