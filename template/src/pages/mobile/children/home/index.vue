<template>
  <div class="mobile-home-wrapper">
    <mobile-layout>
      <div slot="header">
        <mt-header :title="title">
          <mt-button icon="back" slot="left" @click="back">返回</mt-button>
          <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
      </div>

      <div slot="body">
        <mt-tab-container v-model="tabSelected">
          <mt-tab-container-item id="tabA">
            Hello, World!
          </mt-tab-container-item>
          <mt-tab-container-item id="tabB">
            I am V2S!
          </mt-tab-container-item>
          <mt-tab-container-item id="tabC">
            Bye Bye!
          </mt-tab-container-item>
        </mt-tab-container>
      </div>

      <div slot="footer">
        <mt-tabbar v-model="tabSelected">
          <mt-tab-item id="tabA">
            <img slot="icon" src="~images/icons/1.png">
            tab1
          </mt-tab-item>
          <mt-tab-item id="tabB">
            <img slot="icon" src="~images/icons/2.png">
            tab2
          </mt-tab-item>
          <mt-tab-item id="tabC">
            <img slot="icon" src="~images/icons/3.png">
            tab3
          </mt-tab-item>
        </mt-tabbar>
      </div>

      <div slot="subHeader">
        <mt-navbar v-model="tabSelected">
          <mt-tab-item id="tabA">
            菜单A
          </mt-tab-item>
          <mt-tab-item id="tabB">
            菜单B
          </mt-tab-item>
          <mt-tab-item id="tabC">
            菜单C
          </mt-tab-item>
        </mt-navbar>
      </div>
    </mobile-layout>
  </div>
</template>
<script>
  import appConfig from 'config'
  export default {
    name: 'page-mobile-home',
    data() {
      return {
        title: appConfig.appName,
        tabSelected: 'tabA'
      }
    },
    methods: {
      back() {
        this.$router.back()
      }
    }
  }
</script>
<style lang="postcss" scoped>
  .mobile-home-wrapper {
    text-align: center;
    line-height: 5;
  }
</style>