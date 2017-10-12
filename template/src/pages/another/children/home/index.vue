<template>
  <div class="test-children-home-wrapper">
    <layout></layout>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import config from 'layouts/mobile/config'
  import layout from 'layouts/mobile/layout.vue'
  import utils from 'utils'
  export default {
    name: 'page-test-children-home',
    components: {
      layout
    },
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