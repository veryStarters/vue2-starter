<template>
  <div class="layout-wrapper">
    <div class="header-container">
      <slot name="header"></slot>
    </div>
    <div class="main-container">
      <div class="sub-header-container">
        <slot name="subHeader"></slot>
      </div>
      <div class="body-container">
        <slot name="body"></slot>
      </div>
    </div>
    <div class="footer-container">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import MintUI from 'mint-ui'
  import 'mint-ui/lib/style.css'
  Vue.use(MintUI)
  export default {
    name: 'mobile-layout'
  }
</script>
<style lang="postcss" src="./layout.pcss" scoped></style>
