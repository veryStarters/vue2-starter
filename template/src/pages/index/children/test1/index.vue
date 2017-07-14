<template>
  <div class="index-children-test1-wrapper">
    <p>test1</p>
    <p>{{time}}s后自动跳转到test2(可惜当前登录用户无访问test2的权限)</p>
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
      let timer = setInterval(() => {
        if (this.time <= 1) {
          this.$router.push({path: '/test2'})
          clearInterval(timer)
        }
        this.time = this.time - 1
      }, 1000)
    },
    methods: {
      ...mapActions([]),
      ...mapMutations([])
    }
  }
</script>
<style lang="postcss" scoped>
  .index-children-test1-wrapper {
    text-align: center;
    line-height: 3;
  }
</style>