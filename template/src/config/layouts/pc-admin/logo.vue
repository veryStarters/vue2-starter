<template>
  <div class="logo-wrapper" :class="theme" v-if="show" @click="handleGoHome">
    <img :src="img" height="26" align="absmiddle"/>
    <span class="name">{{appName}}</span>
  </div>
</template>
<script>
  import appConfig from 'config'
  import img from 'images/logo.png'
  export default {
    name: 'logo',
    props: ['show', 'theme'],
    data() {
      return {
        img: img,
        appName: appConfig.appName
      }
    },
    methods: {
      handleGoHome() {
        this.$router.push({name: 'indexHome'})
      }
    }
  }
</script>
<style lang="postcss" scoped>
  @define-mixin anim {
    transition: .3s ease-out;
    &:hover {
      text-shadow: 2px 2px 2px rgba(222, 222, 222, .5);
      transform: scale3d(1.1, 1.1, 1) translate3d(10px, 0, 0);
      transition: .2s ease-in;
   }
  }

  .logo-wrapper {
    font-size: 18px;
    cursor: pointer;
    @add-mixin anim;
    .name {
      vertical-align: middle;
    }
    &.dark {
      color: #bfcbd9;
      background: transparent;
    }
    &.light {
      color: #48576a;
      background: transparent;
    }
  }
</style>