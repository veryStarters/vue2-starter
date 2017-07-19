<template>
  <div class="topbar-wrapper">
    <el-row>
      <el-col :span="4">
        <div class="logo-info-container" @click="gotoHome">
          <img src="~images/logo.png" height="45" alt="" align="absmiddle">
          <span class="name">xxx集团</span>
        </div>
      </el-col>
      <el-col :span="17">
        <div class="navbar-container">
          <navbar></navbar>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="user-info-container">
          <el-menu theme="dark" class="el-menu-demo" mode="horizontal" @select="select">
            <el-submenu index="home">
              <template slot="title">{{userInfo.name}}</template>
              <el-menu-item index="userInfo">个人信息</el-menu-item>
              <el-menu-item index="changePassword">修改密码</el-menu-item>
              <el-menu-item index="logout">退出系统</el-menu-item>
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
      }
    },
    computed: {
      ...mapGetters(['userInfo'])
    },
    mounted() {
    },
    methods: {
      ...mapActions(['logout']),
      select(index){
        switch (index) {
          case 'userInfo':
            this.$router.push({name: 'userInfo'})
            break
          case 'logout':
            this.doLogout()
            break
          case 'changePassword':
            console.log('修改密码')
            break
          default:
        }
      },
      doLogout(){
        this.logout().then(() => {
          utils.removeUserInfoFromCache()
          this.$router.push({name: 'userLogin'})
        });
      },
      gotoHome(e) {
        this.$router.push({name: 'indexHome'})
      }
    }
  }
</script>
<style lang="postcss" scoped>
  $topHeight: 60px;
  @define-mixin anim {
    transition: .3s ease-out;
    &:hover {
     text-shadow: 2px 2px 2px rgba(222, 222, 222, .5);
     transform: scale3d(1.1, 1.1, 1);
     transition: .2s ease-in;
   }
  }
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
    @add-mixin anim
  }
  .user-info-container {
    .el-menu-item {
      @add-mixin anim
    }
  }
</style>