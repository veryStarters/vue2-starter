<template>
  <div class="index-children-test1-wrapper">
    test1
  </div>
</template>
<script>
  import { mapState, mapActions, mapMutations } from 'vuex'
  import api from 'api'
  export default {
    name: 'page-index-children-test1',
    components: {},
    data() {
      return {}
    },
    computed: {
      ...mapState([])
    },
    mounted(){
      setTimeout(() => {
        this.$router.push({path:'/test2'})
      }, 5000)
    },
    methods: {
      ...mapActions([]),
      ...mapMutations([])
    }
  }
</script>
<style lang="postcss" scoped>
  .index-children-test1-wrapper {}
</style>