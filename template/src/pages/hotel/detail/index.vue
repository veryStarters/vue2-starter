<template>
  <div class="hotel-detail-wrapper">
    Hello, world!
  </div>
</template>
<script>
  import { mapState, mapActions, mapMutations } from 'vuex'
  import api from 'api'
  export default {
    name: 'hotel-detail',
    components: {},
    data() {
      return {}
    },
    computed: {
      ...mapState([])
    },
    methods: {
      ...mapActions([]),
      ...mapMutations([])
    }
  }
</script>
<style lang="postcss" scoped>
  .hotel-detail-wrapper {
    
  }
</style>