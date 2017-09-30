<template>
  <div class="header-wrapper">
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <router-link to="/user/login" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
</template>
<script>
  export default {
    name: 'header'
  }
</script>