<template>
  <div class="index-docx-wrapper">
    Hello, world!
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import utils from 'utils'
  export default {
    name: 'page-index-docx',
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
  .index-docx-wrapper {
    text-align: center;
    line-height: 5;
  }
</style>