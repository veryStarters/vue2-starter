<template>
  <div class="header-wrapper">
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <router-link to="/" slot="left" v-if="back !== 0">
        <mt-button icon="back">首页</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
</template>
<script>
  import layoutConfig from './config'
  export default {
    name: 'header',
    data() {
      return {
        back: layoutConfig.back || 0
      }
    }
  }
</script>