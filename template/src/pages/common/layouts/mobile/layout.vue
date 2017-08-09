<template>
  <div class="layout-wrapper">
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-tabbar v-model="selected" :fixed="false">
      <mt-tab-item id="外卖" selected>
        <img slot="icon" src="~images/icons/1.png">外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="~images/icons/2.png">订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="~images/icons/3.png">发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="~images/icons/4.png">我的
      </mt-tab-item>
    </mt-tabbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="外卖">
        <mt-cell v-for="n in 10" :key="n" :title="'外卖商品' + n"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="订单">
        <mt-cell v-for="n in 5" :key="n" :title="'订单' + n"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="发现">
        <mt-cell v-for="n in 7" :key="n" :title="'发现内容' + n"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="我的">
        <mt-cell v-for="n in 9" :key="n" :title="'个人信息' + n"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
  export default {
    name: 'Layout',
    data() {
      return {
        selected: '外卖'
      }
    }
  }
</script>