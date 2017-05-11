<template>
  <div id="app">
    <!--<div class="bubble" style="width: 256px;height: 256px; display: inline-block"></div>-->
    <!--<div class="comment" style="width: 256px; height: 256px; display: inline-block"></div>-->
    <router-view></router-view>
  </div>
</template>

<script>
  import 'styles/index.pcss'
  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px
  }
</style>
