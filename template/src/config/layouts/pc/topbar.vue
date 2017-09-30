<script>
  import {mapGetters, mapActions} from 'vuex'
  import utils from 'utils'
  import navbar from './navbar.vue'
  import img from 'images/logo.png'
  export default {
    name: 'topbar',
    components: {
      navbar
    },
    data() {
      return {
        userInfo: utils.getUserInfoFromCache()
      }
    },
    render(h){
      return (
        <div class='topbar-wrapper'>
          <el-row>
            <el-col span={4}>
              <div class='logo-info-container' onClick='handleGoHome'>
                <img src={img} height='45' align='absmiddle'/>
                <span class='name'>xxx管理系统</span>
              </div>
            </el-col>
            <el-col span={17}>
              <div class='navbar-container'>
                <navbar></navbar>
              </div>
            </el-col>
            <el-col span={3}>
              <div class='user-info-container'>
                <el-menu theme='dark' class='el-menu-demo' mode='horizontal' onSelect={this.handleSelect}>
                  <el-submenu index='home'>
                    <template slot='title'>{this.userInfo.name || '游客'}</template>
                    {this.userInfo.name ? this.userMenu() : <el-menu-item index='login'>登录</el-menu-item>}
                  </el-submenu>
                </el-menu>
              </div>
            </el-col>
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