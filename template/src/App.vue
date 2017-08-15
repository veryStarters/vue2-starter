<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
  import 'styles/index.pcss'
  import mixins from 'mixins'
  export default {
    name: 'app',
    mixins: [mixins],
    created(){
      this.setTitle()
    },
    watch: {
      '$route': function () {
        this.setTitle()
      }
    }
  }
</script>
