<template>
  <div class="mobile-wrapper">
    <router-view></router-view>
    <div class="fixed-button">
      福
    </div>
  </div>
</template>
<script>
  export default {
    name: 'page-mobile',
  }
</script>
<style lang="postcss" scoped>
  .mobile-wrapper {
    .fixed-button {
      position: fixed;
      bottom: 65px;
      right: 10px;
      width: 50px;
      height: 50px;
      border-radius: 50px;
      text-align: center;
      line-height: 50px;
      font-size: 26px;
      background: #000;
      color: #fff;
      opacity: .4;
      &:hover {
        background: red;
      }
    }
  }
</style>