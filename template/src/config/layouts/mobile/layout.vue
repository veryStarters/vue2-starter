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
  import layoutConfig from './default.conf'
  export default {
    name: 'mobile-layout',
    beforeMount() {
      let meta = document.createElement('meta')
      meta.setAttribute('content', 'width=device-width,minimum-scale=1.0,maximum-scale=1.0,shrink-to-fit=no,user-scalable=no,minimal-ui')
      meta.setAttribute('name', 'viewport')
      document.head.appendChild(meta)
    }
  }
</script>