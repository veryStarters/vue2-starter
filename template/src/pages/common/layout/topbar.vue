<template>
  <div class="topbar-wrapper">
    <el-row>
      <el-col :span="4">
        <div class="logo-info-container" @click="gotoHome">
          <img src="~images/logo.png" height="50" alt="" align="absmiddle">xxx集团
        </div>
      </el-col>
      <el-col :span="17">
        <div class="navbar-container">
          <navbar></navbar>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="user-info-container">
          <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-submenu index="1">
              <template slot="title">{{userInfo.name}}</template>
              <el-menu-item index="1-1">个人信息</el-menu-item>
              <el-menu-item index="1-2">修改密码</el-menu-item>
              <el-menu-item index="1-4" @click="doLogout">退出系统</el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  import utils from 'utils'
  import navbar from './navbar.vue'
  export default {
    name: 'topbar',
    components: {
      navbar
    },
    data() {
      return {
        activeIndex: '',
      }
    },
    computed: {
      ...mapGetters(['userInfo'])
    },
    mounted() {
      console.log(this.$refs.navbar)
    },
    methods: {
      ...mapActions(['logout']),
      doLogout(){
        this.logout().then(() => {
          utils.removeUserInfoFromCache()
          this.$router.push({path: '/user/login'})
        });
      },
      handleSelect() {
      },
      gotoHome(e) {
        this.$router.push('/')
      }
    }
  }
</script>
<style lang="postcss" scoped>
  $topHeight: 60px;
  .topbar-wrapper{
    height: $topHeight;
    line-height: $topHeight;
    color: #bfcbd9;
    background: #324157;
  }
  .logo-info-container {
    cursor: pointer;
    margin-left: 20px;
    font-size: 22px;
    &:hover {
      text-shadow: 10px 4px 2px rgba(222, 222, 222, .5);
    }
  }
</style>