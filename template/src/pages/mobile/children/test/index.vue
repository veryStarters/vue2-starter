<template>
  <div class="mobile-test-wrapper">
    <mobile-layout>
      <div slot="body">213123312</div>
    </mobile-layout>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import utils from 'utils'
  export default {
    name: 'page-mobile-test',
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
  .mobile-test-wrapper {
    text-align: center;
    line-height: 5;
  }
</style>
