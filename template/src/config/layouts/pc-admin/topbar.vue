<script>
  import {mapGetters, mapActions} from 'vuex'
  import utils from 'utils'
  import navbar from './navs.vue'
  import logo from './logo.vue'
  import config from './config'
  import appConfig from 'config'
  export default {
    name: 'topbar',
    components: {
      navbar,
      logo
    },
    data() {
      return {
        userInfo: utils.getUserInfoFromCache(),
        theme: config.sidebarTheme,
        className: 'topbar-wrapper ' + config.sidebarTheme
      }
    },
    render(h){
      return (
        <div class={this.className}>
          <el-row>
            <el-col class='logo' span={4}>
              <logo show={config.topbar !== 0}></logo>
            </el-col>
            <el-col span={17}>
              <div class='navbar-container'>
                <navbar></navbar>
              </div>
            </el-col>
            {!appConfig.isStatic
              ? <el-col span={3}>
                  <div class='user-info-container'>
                    <el-menu theme={this.theme} class='el-menu-demo' mode='horizontal' onSelect={this.handleSelect}>
                      <el-submenu index='home'>
                        <template slot='title'>{this.userInfo.name || '游客'}</template>
                        {this.userInfo.name ? this.userMenu() : <el-menu-item index='login'>登录</el-menu-item>}
                      </el-submenu>
                    </el-menu>
                  </div>
                </el-col> : ''
            }
          </el-row>
        </div>
      )
    },
    methods: {
      ...mapActions(['logout']),
      userMenu(){
        return (
          <div>
            <el-menu-item index='userInfo'>个人信息</el-menu-item>
            <el-menu-item index='changePassword'>修改密码</el-menu-item>
            <el-menu-item index='logout'>退出系统</el-menu-item>
          </div>
        )
      },
      handleSelect(index){
        switch (index) {
          case 'userInfo':
            this.$message('欢迎你！' + this.userInfo.name)
            break
          case 'logout':
            this.doLogout()
            break
          case 'changePassword':
            this.$message('修改密码')
            break
          case 'login':
            this.$router.push({name: 'userLogin'})
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
      handleGoHome() {
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
     transform: scale3d(1.1, 1, 1) translate3d(-10px, 0, 0);
     transition: .2s ease-in;
   }
  }
  .topbar-wrapper {
    height: $topHeight;
    line-height: $topHeight;
    color: #bfcbd9;
    .logo {
      padding-left: 20px;
    }
    &.dark {
      background: #334257;
    }
    &.light {
      background: #eef1f6;
    }
  }
  .user-info-container {
    .el-menu-item {
      @add-mixin anim
    }
  }
</style>