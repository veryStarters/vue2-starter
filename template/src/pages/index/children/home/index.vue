<template>
  <div class="home-wrapper">
    <div class="info" v-show="isLogin">
      欢迎你，{{userInfo.name}} !!  |  <span class="grey">({{remainingTime}}分钟后登录失效)</span>
    </div>
    <p class="logout">
      <button @click="doLogout">退出系统</button>
    </p>
    <jc-hello></jc-hello>
  </div>
</template>
<!--可以拆分JS|CSS至单独的文件-->
<script src="./index.js"></script>
<style src="./index.pcss" lang="postcss" scoped></style>