<template>
  <div class="footer-wrapper">
    <mt-tabbar v-model="selected">
      <mt-tab-item id="aboutHome">
        <img slot="icon" src="~images/icons/1.png">外卖
      </mt-tab-item>
      <mt-tab-item id="aboutTest1">
        <img slot="icon" src="~images/icons/2.png">订单
      </mt-tab-item>
      <mt-tab-item id="aboutTest2">
        <img slot="icon" src="~images/icons/3.png">发现
      </mt-tab-item>
      <mt-tab-item id="aboutTest3">
        <img slot="icon" src="~images/icons/4.png">我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
  export default {
    name: 'footer',
    data(){
      return {
        selected: ''
      }
    },
    mounted(){
      this.selected = this.$route.name
    },
    watch: {
      selected: function (to) {
        this.$router.push({name: to})
      }
    }
  }
</script>